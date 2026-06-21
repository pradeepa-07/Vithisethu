from fastapi import FastAPI, HTTPException
import chromadb
from sentence_transformers import SentenceTransformer
import ollama
import pandas as pd
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import os
import json
import firebase_admin
from firebase_admin import credentials, db
from datetime import datetime

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

chroma_client = chromadb.PersistentClient(path="./chroma_db")
collection = chroma_client.get_or_create_collection(name="lawlens")
model = SentenceTransformer('all-MiniLM-L6-v2')
df = pd.read_excel("bns.xlsx")

# Initialize Firebase
cred = credentials.Certificate("firebase-key.json")  # use your actual filename
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://vidhisethu-default-rtdb.firebaseio.com'
})

OLLAMA_MODEL = "gemma2:2b"

LANGUAGE_NAMES = {
    "en": "English",
    "hi": "Hindi",
    "ta": "Tamil",
    "te": "Telugu",
    "kn": "Kannada",
    "ml": "Malayalam",
    "bn": "Bengali",
    "mr": "Marathi",
}


def get_language_instruction(language: str) -> str:
    lang_name = LANGUAGE_NAMES.get(language, "English")
    if lang_name == "English":
        return "Respond in clear, simple English."
    return (
        f"Respond entirely in {lang_name}, using the {lang_name} script "
        f"(not transliterated English). Keep BNS/IPC section numbers in "
        f"numerals (e.g. 'Section 103') and keep legal proper nouns "
        f"(BNS, IPC, FIR) as-is, but explain everything else in {lang_name}."
    )


def build_sections_and_context(metadatas):
    """Deduplicate sections and build context string."""
    seen_sections = set()
    sections = []
    context = ""
    for meta in metadatas:
        sec_num = meta.get('section_number', 'N/A')
        if sec_num in seen_sections:
            continue
        seen_sections.add(sec_num)
        sections.append({
            "section_number": sec_num,
            "title": meta.get('title', 'N/A'),
            "punishment": meta.get('punishment', 'N/A')
        })
        context += f"Section {sec_num}: {meta.get('title')}\n{meta.get('description')}\n\n"
    return sections, context


def save_to_firebase(query, answer, language="en"):
    """Save chat exchange to Firebase. Never crashes the request if it fails."""
    try:
        ref = db.reference('chat_history')
        ref.push({
            'query': query,
            'answer': answer,
            'language': language,
            'timestamp': datetime.now().isoformat()
        })
    except Exception as e:
        print(f"Firebase save failed: {e}")


try:
    with open("IPC_to_BNS_Lookup.json", "r") as f:
        ipc_bns_data = json.load(f)
        ipc_bns_map = {}
        for entry in ipc_bns_data.get("data", []):
            ipc_bns_map[entry["ipc_section"]] = {
                "bns_section": entry["bns_section"],
                "subject_offence": entry.get("subject_offence", ""),
                "key_change_notes": entry.get("key_change_notes", ""),
                "effective_date": ipc_bns_data.get("effective_date", "2024-07-01")
            }
except FileNotFoundError:
    ipc_bns_map = {}


@app.get("/")
def home():
    return {"message": "Vidhisethu API is running 🚀"}


@app.get("/search")
def search(query: str, language: str = "en"):
    if not query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty")

    try:
        query_vector = model.encode(query).tolist()
        results = collection.query(
            query_embeddings=[query_vector],
            n_results=3
        )

        metadatas = results.get('metadatas', [[]])[0]
        if not metadatas:
            return {
                "query": query,
                "ai_explanation": "No relevant BNS sections found for your query.",
                "relevant_sections": []
            }

        sections, context = build_sections_and_context(metadatas)
        language_instruction = get_language_instruction(language)

        response = ollama.chat(
            model=OLLAMA_MODEL,
            messages=[
                {
                    "role": "system",
                    "content": f"""You are a legal assistant for India's Bharatiya Nyaya Sanhita (BNS) - India's criminal code that replaced the Indian Penal Code (IPC) in 2024. The user asked: '{query}'

You MUST reference these specific BNS sections in your answer:
{context}

Always mention the section numbers and explain what they mean. Be concise. Do NOT add repeated disclaimers about not being able to give legal advice.

{language_instruction}"""
                },
                {
                    "role": "user",
                    "content": query
                }
            ],
            options={"num_predict": 280}
        )

        answer_text = response['message']['content']
        save_to_firebase(query, answer_text, language)

        return {
            "query": query,
            "ai_explanation": answer_text,
            "relevant_sections": sections
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Search failed: {str(e)}")


@app.post("/chat")
def chat(payload: dict):
    messages = payload.get("messages", [])
    language = payload.get("language", "en")

    if not messages:
        raise HTTPException(status_code=400, detail="Messages cannot be empty")

    try:
        query = messages[-1].get("content", "")
        if not query.strip():
            raise HTTPException(status_code=400, detail="Last message cannot be empty")

        recent_messages = messages[-6:]

        query_vector = model.encode(query).tolist()
        results = collection.query(
            query_embeddings=[query_vector],
            n_results=3
        )

        metadatas = results.get('metadatas', [[]])[0]
        sections, context = build_sections_and_context(metadatas) if metadatas else ([], "")

        language_instruction = get_language_instruction(language)

        system_prompt = {
            "role": "system",
            "content": f"""You are a legal assistant for India's Bharatiya Nyaya Sanhita (BNS) - India's criminal code that replaced the Indian Penal Code (IPC) in 2024. The user just asked: '{query}'

You MUST reference these specific BNS sections in your answer:
{context if context else 'None found - use conversation context only.'}

Always mention the section numbers and explain what they mean. Be concise. Do NOT add repeated disclaimers about not being able to give legal advice.

{language_instruction}"""
        }

        ollama_messages = [system_prompt] + recent_messages

        response = ollama.chat(
            model=OLLAMA_MODEL,
            messages=ollama_messages,
            options={"num_predict": 280}
        )

        answer_text = response['message']['content']
        save_to_firebase(query, answer_text, language)

        return {
            "answer": answer_text,
            "relevant_sections": sections
        }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Chat failed: {str(e)}")


@app.get("/section")
def get_section(number: int):
    try:
        result = df[df['section_number'] == number]

        if result.empty:
            raise HTTPException(status_code=404, detail="Section not found")

        row = result.iloc[0]
        return {
            "section_number": int(row['section_number']),
            "title": str(row['title']),
            "description": str(row['description']),
            "punishment": str(row['punishment']),
            "keywords": str(row['keywords'])
        }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Section lookup failed: {str(e)}")


@app.get("/ipc/{ipc_number}")
def ipc_lookup(ipc_number: str):
    if ipc_number not in ipc_bns_map:
        raise HTTPException(status_code=404, detail=f"IPC Section {ipc_number} not found in mapping")

    mapping = ipc_bns_map[ipc_number]
    bns_num = mapping['bns_section']
    effective_date = mapping.get('effective_date', '2024-07-01')

    effective_date_msg = f"IPC Section {ipc_number} was changed to BNS Section {bns_num} on July 1, 2024"

    result = df[df['section_number'].astype(str).str.strip() == str(bns_num).strip()]

    if result.empty:
        try:
            bns_num_int = int(float(bns_num.split('(')[0]))
            result = df[df['section_number'] == bns_num_int]
        except:
            pass

    bns_details = None
    if not result.empty:
        row = result.iloc[0]
        bns_details = {
            "section_number": str(row['section_number']),
            "title": str(row['title']),
            "description": str(row['description']),
            "punishment": str(row['punishment']),
            "keywords": str(row.get('keywords', '')) if 'keywords' in row.index else ''
        }

    return {
        "ipc_section": ipc_number,
        "subject_offence": mapping.get('subject_offence', ''),
        "key_change_notes": mapping.get('key_change_notes', ''),
        "effective_date_message": effective_date_msg,
        "effective_date": effective_date,
        "bns_section": bns_num,
        "bns_details": bns_details
    }