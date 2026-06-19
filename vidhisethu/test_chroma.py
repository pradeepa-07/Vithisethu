import chromadb
from sentence_transformers import SentenceTransformer

chroma_client = chromadb.PersistentClient(path="./chroma_db")
collection = chroma_client.get_or_create_collection(name="lawlens")

print("Total items in collection:", collection.count())

model = SentenceTransformer('all-MiniLM-L6-v2')
query_vector = model.encode("theft").tolist()

results = collection.query(query_embeddings=[query_vector], n_results=2)
print(results)