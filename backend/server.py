import os
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from pypdf import PdfReader

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve your new HTML file as the main interface
@app.get("/", response_class=HTMLResponse)
async def serve_ui():
    if os.path.exists("index.html"):
        with open("index.html", "r", encoding="utf-8") as f:
            return f.read()
    return "<h1>Please place your index.html file in the project folder.</h1>"

# API to check your profile files automatically
@app.get("/api/check-profile")
async def check_profile():
    profile_dir = "profile"
    if os.path.exists(profile_dir):
        files = [f for f in os.listdir(profile_dir) if f.endswith('.pdf')]
        return {"status": "success", "files": files, "count": len(files)}
    return {"status": "error", "files": []}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)