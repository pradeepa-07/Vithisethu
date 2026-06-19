# ⚖️ Vidhisethu — AI-powered BNS Legal Assistant

An AI-powered Bharatiya Nyaya Sanhita (BNS) Legal Assistant using RAG, local Vector Search, and a fully local LLM — zero API keys, zero rate limits, zero internet dependency for AI inference.

## 🚀 Features
- **AI Assistant** — Describe your situation in plain English, get relevant BNS sections explained simply (with chat history)
- **Section Lookup** — Enter BNS section number OR old IPC section number to get details
- **IPC to BNS Mapping** — Shows which BNS section replaced any given IPC section, with effective date
- **Crisis Detection** — Detects sensitive situations (abuse, threats, self-harm) and shows helplines + nearest police station
- **Case Library** — Landmark Supreme Court cases simplified

## 🛠️ Tech Stack
- **RAG** — Retrieval Augmented Generation pipeline
- **ChromaDB** — Local vector database for semantic search (no API key needed)
- **Sentence Transformers** — Text embeddings (all-MiniLM-L6-v2)
- **Ollama (Gemma 2:2b)** — Fully local LLM, zero API cost, runs completely offline
- **FastAPI** — Backend REST API
- **HTML/CSS/JS** — Frontend

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/pradeepa-07/Vithisethu.git
cd Vithisethu/vidhisethu
```

### 2. Install Python dependencies
```bash
pip install -r requirements.txt
```

### 3. Install Ollama (one-time, like installing Python)
Download from [ollama.com/download](https://ollama.com/download) and install.

### 4. Pull the AI model (one-time, ~1.6GB)
```bash
ollama pull gemma2:2b
```

### 5. Populate the local vector database (one-time setup)
```bash
python setup_chromadb.py
```

### 6. Run the backend
```bash
python -m uvicorn main:app --reload
```

### 7. Open the frontend
Open `index.html` directly in your browser.

## 🔑 Why Fully Local?
Most AI legal assistants depend entirely on cloud APIs that cost money, have rate limits, and require signups. Vidhisethu runs its entire AI pipeline — both vector search (ChromaDB) and LLM inference (Ollama) — completely locally. This means:
- No API keys required
- No rate limits or token exhaustion
- Works fully offline after initial setup
- Anyone can clone and run it immediately

## 🏆 Hackathon
Stack Unknown — DCS & GDG on Campus, SASTRA University, June 2026

## ⚠️ Disclaimer
Vidhisethu is an educational legal research tool and does not constitute legal advice. Always consult a qualified legal professional for your specific situation.