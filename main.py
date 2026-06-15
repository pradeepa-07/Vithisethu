from fastapi import FastAPI, HTTPException
from pinecone import Pinecone
from sentence_transformers import SentenceTransformer
from groq import Groq
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
index = pc.Index("vidhisethu")
model = SentenceTransformer('all-MiniLM-L6-v2')
groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))
df = pd.read_excel("bns.xlsx")

# load IPC to BNS mapping
try:
    with open("ipc_bns_map.json", "r") as f:
        ipc_bns_map = json.load(f)
except FileNotFoundError:
    ipc_bns_map = {}

@app.get("/")
def home():
    return {"message": "Vidhi sethu API is running 🚀"}

@app.get("/search")
def search(query: str):
    if not query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty")

    try:
        query_vector = model.encode(query).tolist()
        results = index.query(
            vector=query_vector,
            top_k=3,
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

        response = groq_client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": "You are a helpful legal assistant. Explain BNS laws in simple language that anyone can understand. Be concise and clear."
                },
                {
                    "role": "user",
                    "content": f"Question: {query}\n\nRelevant BNS Sections:\n{context}\n\nExplain what law applies and what it means in simple terms."
                }
            ]
        )

        return {
            "query": query,
            "ai_explanation": response.choices[0].message.content,
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

        query_vector = model.encode(query).tolist()
        results = index.query(
            vector=query_vector,
            top_k=3,
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

        groq_messages = [
            {
                "role": "system",
                "content": f"You are a helpful BNS legal assistant. Answer based on these relevant sections:\n{context if context else 'No specific sections found. Answer based on general BNS knowledge.'}\nExplain in simple language."
            }
        ] + messages

        response = groq_client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=groq_messages
        )

        return {
            "answer": response.choices[0].message.content,
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

    # fetch BNS section details
    result = df[df['section_number'] == bns_num]
    bns_details = None
    if not result.empty:
        row = result.iloc[0]
        bns_details = {
            "section_number": int(row['section_number']),
            "title": str(row['title']),
            "description": str(row['description']),
            "punishment": str(row['punishment'])
        }

    return {
        "ipc_section": ipc_number,
        "offence": mapping['offence'],
        "note": mapping['note'],
        "bns_section": bns_num,
        "bns_details": bns_details
    }