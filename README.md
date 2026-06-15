# Law Lens - BNS Legal Assistant

A legal assistant powered by AI that helps users search and understand sections of the Bharatiya Nyaya Sanhita (BNS) through a web interface.

## Features

- **Vector Search**: Uses Pinecone for semantic search across BNS sections
- **AI-Powered Responses**: Leverages Groq API for intelligent legal guidance
- **FastAPI Backend**: RESTful API for handling search and query requests
- **Modern UI**: Clean, dark-themed web interface for easy navigation
- **Semantic Understanding**: Uses sentence transformers for accurate legal section matching

## Tech Stack

- **Frontend**: HTML/CSS/JavaScript
- **Backend**: FastAPI (Python)
- **Vector Database**: Pinecone
- **AI/LLM**: Groq API
- **Embeddings**: Sentence Transformers (all-MiniLM-L6-v2)
- **Data Processing**: Pandas

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd lawlens
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your API keys:
   - `PINECONE_API_KEY`: Your Pinecone API key
   - `GROQ_API_KEY`: Your Groq API key

5. Prepare the BNS dataset:
   - Ensure `bns.xlsx` is in the project root directory

6. Initialize Pinecone index:
   ```bash
   python setup_pinecone.py
   ```

## Usage

1. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```

2. Open `index.html` in your browser or serve it with a local server:
   ```bash
   python -m http.server 8000
   ```

3. Use the web interface to search for BNS sections and get legal guidance

## Project Structure

```
lawlens/
├── index.html              # Frontend interface
├── main.py                 # FastAPI backend application
├── setup_pinecone.py       # Pinecone index initialization script
├── bns.xlsx                # BNS dataset
├── requirements.txt        # Python dependencies
├── .env.example            # Example environment variables
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## API Endpoints

- `GET /` - Health check
- `GET /search?query=<query>` - Search for relevant BNS sections

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

This tool is for informational purposes only and should not be considered as legal advice. Always consult with a qualified legal professional for legal matters.
