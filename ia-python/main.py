from fastapi import FastAPI
from model_a import gerar_estatistico
from model_b import gerar_ia

app = FastAPI()

@app.get("/gerar/estatistico")
def estatistico():
    return gerar_estatistico()

@app.get("/gerar/ia")
def ia():
    return gerar_ia()
