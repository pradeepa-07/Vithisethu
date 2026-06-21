# ⚖️ Vidhisethu — AI-powered BNS Legal Assistant

An AI-powered Bharatiya Nyaya Sanhita (BNS) Legal Assistant using RAG, local Vector Search, a fully local LLM, and Firebase-backed chat history — built for the Stack Unknown hackathon's obscure tech stack challenge.

## 🚀 Features
- **AI Assistant** — Describe your situation in plain English (or Tamil, Kannada, Hindi, Telugu, Malayalam, Bengali, Marathi), get relevant BNS sections explained simply, with persistent chat history
- **Section Lookup** — Enter BNS section number OR old IPC section number to get details
- **IPC to BNS Mapping** — Shows which BNS section replaced any given IPC section, with effective date
- **Crisis Detection** — Detects sensitive situations (abuse, threats, self-harm) and shows helplines + nearest police station
- **Case Library** — Landmark Supreme Court cases simplified
- **Multi-language Support** — AI responds in the language selected (English, Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi)

## 🛠️ Tech Stack
- **RAG** — Retrieval Augmented Generation pipeline
- **ChromaDB** — Local vector database for semantic search (no API key needed)
- **Sentence Transformers** — Text embeddings (all-MiniLM-L6-v2)
- **Ollama (Gemma 2:2b)** — Fully local LLM, zero API cost, runs offline
- **Firebase Realtime Database** — Persists chat history (Google technology integration)
- **FastAPI** — Backend REST API
- **HTML/CSS/JS** — Frontend

## 🔵 Google Technology Used
**Firebase Realtime Database** — Every AI Assistant conversation (query, answer, language, timestamp) is persisted to Firebase, giving the app real conversation history beyond a single browser session.

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

### 3. Install Ollama
Download from [ollama.com/download](https://ollama.com/download) and install.

### 4. Pull the AI model (one-time, ~1.6GB)
```bash
ollama pull gemma2:2b
```

### 5. Set up your own Firebase project (free, no card needed)
- Go to [console.firebase.google.com](https://console.firebase.google.com)
- Create a project → enable **Realtime Database** (test mode)
- Project Settings → Service Accounts → Generate new private key
- Save the downloaded JSON as `firebase-key.json` in the `vidhisethu` folder
- Update the `databaseURL` in `main.py` to match your project's URL

### 6. Populate the local vector database (one-time setup)
```bash
python setup_chromadb.py
```

### 7. Run the backend
```bash
python -m uvicorn main:app --reload
```

### 8. Open the frontend
Open `index.html` (landing page) or `app.html` (main app) directly in your browser.

## 🔑 Why Fully Local AI?
Most AI legal assistants depend entirely on cloud APIs that cost money, have rate limits, and require signups. Vidhisethu runs both its vector search (ChromaDB) and LLM inference (Ollama) completely locally — meaning no API keys, no rate limits, and full offline capability once set up, while still using Firebase for genuine cloud-backed persistence of conversation history.

## 🏆 Hackathon
Stack Unknown — DCS & GDG on Campus, SASTRA University, June 2026

## ⚠️ Disclaimer
Vidhisethu is an educational legal research tool and does not constitute legal advice. Always consult a qualified legal professional for your specific situation.