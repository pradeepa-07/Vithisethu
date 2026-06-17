from pinecone import Pinecone, ServerlessSpec
from pinecone import Pinecone
from sentence_transformers import SentenceTransformer
import pandas as pd
from dotenv import load_dotenv
import os

load_dotenv()

# connect to pinecone
pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))

# create index if it doesn't exist

# replace the create_index part with this:
if "lawlens" not in pc.list_indexes().names():
    pc.create_index(
        name="lawlens",
        dimension=384,
        metric="cosine",
        spec=ServerlessSpec(
            cloud="aws",
            region="us-east-1"
        )
    )
index = pc.Index("lawlens")

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

    index.upsert(vectors=[{
        "id": str(row['section_id']),
        "values": vector,
        "metadata": {
            "section_number": str(row['section_number']),
            "title": str(row['title']),
            "description": str(row['description']),
            "punishment": str(row['punishment'])
        }
    }])

    if i % 50 == 0:
        print(f"Processed {i} sections...")

print("Done! BNS data stored in Pinecone ✅")
