import pandas as pd
import random

CSV_PATH = "/data/megasena.csv"

def gerar_estatistico():
    df = pd.read_csv(CSV_PATH)

    bolas = []
    for i in range(1, 7):
        bolas.extend(df[f"bola{i}"].tolist())

    frequencia = pd.Series(bolas).value_counts()

    top = frequencia.head(20).index.tolist()
    jogo = sorted(random.sample(top, 6))

    jogos = [sorted(random.sample(top, 6)) for _ in range(5)]

    return {
        "modelo": "estatistico_csv",
        "jogos": jogos
    }
