import chromadb
from sentence_transformers import SentenceTransformer
import pandas as pd

# connect to a local, persistent ChromaDB store (no API key, no internet needed)
chroma_client = chromadb.PersistentClient(path="./chroma_db")

# create the collection if it doesn't exist
collection = chroma_client.get_or_create_collection(name="lawlens")

# load BNS dataset
df = pd.read_excel("bns.xlsx")

# load sentence transformer model
print("Loading model...")
model = SentenceTransformer('all-MiniLM-L6-v2')

# embed and store each section
print("Embedding BNS sections...")
for i, row in df.iterrows():
    text = f"{row['title']} {row['description']} {row['keywords']}"
    vector = model.encode(text).tolist()

    collection.upsert(
        ids=[str(row['section_id'])],
        embeddings=[vector],
        metadatas=[{
            "section_number": str(row['section_number']),
            "title": str(row['title']),
            "description": str(row['description']),
            "punishment": str(row['punishment'])
        }]
    )

    if i % 50 == 0:
        print(f"Processed {i} sections...")

print("Done! BNS data stored in ChromaDB ✅")
