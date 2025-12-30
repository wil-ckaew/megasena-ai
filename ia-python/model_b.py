import numpy as np
import pandas as pd
from joblib import load
import random
import os

CSV_PATH = os.path.join(os.path.dirname(__file__), "../data/megasena.csv")
MODEL_PATH = os.path.join(os.path.dirname(__file__), "model_rf.joblib")

model = load(MODEL_PATH)

def gerar_ia(qtd_jogos: int = 1):
    df = pd.read_csv(CSV_PATH)

    if df.empty:
        raise ValueError("O CSV está vazio!")

    last = df.iloc[-1]
    bolas = [last['bola1'], last['bola2'], last['bola3'], last['bola4'], last['bola5'], last['bola6']]
    soma = sum(bolas)
    minimo = min(bolas)
    maximo = max(bolas)
    pares = sum(1 for n in bolas if n % 2 == 0)
    impares = sum(1 for n in bolas if n % 2 != 0)

    jogos = []

    for _ in range(qtd_jogos):
        # Adiciona ruído pequeno nas features para gerar variações
        noise = lambda x: x + random.randint(-2, 2)  # muda -2 a +2
        X_last = np.array([[noise(soma), noise(maximo), noise(minimo), noise(pares), noise(impares)]])
        
        # Prever próximo concurso
        y_pred = model.predict(X_last)[0]

        # Arredondar, limitar e remover duplicados
        y_pred = [int(round(min(max(n, 1), 60))) for n in y_pred]
        y_pred = sorted(list(set(y_pred)))

        # Completar aleatoriamente se faltar
        while len(y_pred) < 6:
            n = random.randint(1, 60)
            if n not in y_pred:
                y_pred.append(n)
        y_pred = sorted(y_pred)

        jogos.append(y_pred)

    return {
        "modelo": "ia_rf",
        "jogos": jogos
    }

if __name__ == "__main__":
    print(gerar_ia(5))  # gerar 5 jogos variados
