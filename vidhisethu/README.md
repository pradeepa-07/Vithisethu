# ⚖️ Vidhisethu — AI-powered BNS Legal Assistant

An AI-powered Bharatiya Nyaya Sanhita (BNS) Legal Assistant using RAG, Vector Search, and a fully local LLM — no API keys, no rate limits, no internet dependency.

## 🚀 Features
- **AI Assistant** — Describe your situation in plain English, get relevant BNS sections explained simply (with chat history)
- **Section Lookup** — Enter BNS section number OR old IPC section number to get details
- **IPC to BNS Mapping** — Shows which BNS section replaced any given IPC section, with effective date
- **Crisis Detection** — Detects sensitive situations (abuse, threats, self-harm) and shows helplines + nearest police station via Google Maps
- **Case Library** — Landmark Supreme Court cases simplified

## 🛠️ Tech Stack
- **RAG** — Retrieval Augmented Generation pipeline
- **ChromaDB** — Local vector database for semantic search
- **Sentence Transformers** — Text embeddings (all-MiniLM-L6-v2)
- **Ollama (Gemma 2:2b)** — Fully local LLM, zero API cost, runs offline
- **FastAPI** — Backend REST API
- **Google Maps** — Nearest police station lookup
- **HTML/CSS/JS** — Frontend

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/pradeepa-07/Vithisethu.git
cd Vithisethu
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

### 5. Create `.env` file in the root folder
### 6. Populate the vector database (one-time setup)
```bash
python setup_chromadb.py
```

### 7. Run the backend
```bash
python -m uvicorn main:app --reload
```

### 8. Open the frontend
Open `index.html` directly in your browser.


## 🏆 Hackathon
Stack Unknown — DCS & GDG on Campus, SASTRA University, June 2026

**Why this stack is unconventional:** Most AI legal assistants rely entirely on cloud APIs that cost money and have rate limits. Vidhisethu runs its entire LLM inference locally via Ollama and its vector search locally via ChromaDB — making it free forever, fully offline-capable, and immune to API outages, rate limits, or token exhaustion, with zero cloud dependency end to end.

## ⚠️ Disclaimer
Vidhisethu is an educational legal research tool and does not constitute legal advice. Always consult a qualified legal professional for your specific situation.