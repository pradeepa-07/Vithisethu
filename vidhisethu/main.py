from fastapi import FastAPI, HTTPException
from pinecone import Pinecone
from sentence_transformers import SentenceTransformer
import ollama
import pandas as pd
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import os
import json

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
index = pc.Index("lawlens")
model = SentenceTransformer('all-MiniLM-L6-v2')
df = pd.read_excel("bns.xlsx")

OLLAMA_MODEL = "gemma2:2b"

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
def search(query: str):
    if not query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty")

    try:
        query_vector = model.encode(query).tolist()
        results = index.query(
            vector=query_vector,
            top_k=2,
            include_metadata=True
        )

        matches = results.get('matches', [])
        if not matches:
            return {
                "query": query,
                "ai_explanation": "No relevant BNS sections found for your query.",
                "relevant_sections": []
            }

        sections = []
        context = ""
        for match in matches:
            meta = match.get('metadata', {})
            sections.append({
                "section_number": meta.get('section_number', 'N/A'),
                "title": meta.get('title', 'N/A'),
                "punishment": meta.get('punishment', 'N/A')
            })
            context += f"Section {meta.get('section_number')}: {meta.get('title')}\n{meta.get('description')}\n\n"

        response = ollama.chat(
            model=OLLAMA_MODEL,
            messages=[
                {
                    "role": "system",
                    "content": f"""You are a BNS legal assistant. The user asked: '{query}'

You MUST reference these specific BNS sections in your answer:
{context}

Always mention the section numbers and explain what they mean. Be concise."""
                },
                {
                    "role": "user",
                    "content": query
                }
            ],
            options={"num_predict": 250}
        )

        return {
            "query": query,
            "ai_explanation": response['message']['content'],
            "relevant_sections": sections
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Search failed: {str(e)}")


@app.post("/chat")
def chat(payload: dict):
    messages = payload.get("messages", [])

    if not messages:
        raise HTTPException(status_code=400, detail="Messages cannot be empty")

    try:
        query = messages[-1].get("content", "")
        if not query.strip():
            raise HTTPException(status_code=400, detail="Last message cannot be empty")

        recent_messages = messages[-6:]

        query_vector = model.encode(query).tolist()
        results = index.query(
            vector=query_vector,
            top_k=2,
            include_metadata=True
        )

        matches = results.get('matches', [])
        sections = []
        context = ""

        if matches:
            for match in matches:
                meta = match.get('metadata', {})
                sections.append({
                    "section_number": meta.get('section_number', 'N/A'),
                    "title": meta.get('title', 'N/A'),
                    "punishment": meta.get('punishment', 'N/A')
                })
                context += f"Section {meta.get('section_number')}: {meta.get('title')}\n{meta.get('description')}\n\n"

        system_prompt = {
            "role": "system",
            "content": f"""You are a BNS legal assistant. The user just asked: '{query}'

You MUST reference these specific BNS sections in your answer:
{context if context else 'None found - use conversation context only.'}

Always mention the section numbers and explain what they mean. Be concise."""
        }

        ollama_messages = [system_prompt] + recent_messages

        response = ollama.chat(
            model=OLLAMA_MODEL,
            messages=ollama_messages,
            options={"num_predict": 250}
        )

        return {
            "answer": response['message']['content'],
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