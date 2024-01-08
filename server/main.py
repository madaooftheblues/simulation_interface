from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

sess = requests.Session()
webots_server = 'https://localhost:8000'

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return "Hello from FastAPI!"

@app.post("/pauseplay")
def pauseplay(state: bool):
    sess.post(webots_server, state)
