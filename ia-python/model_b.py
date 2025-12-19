import random

def gerar_ia():
    jogos = []

    for _ in range(5):
        jogo = sorted(random.sample(range(1, 61), 6))
        jogos.append(jogo)  # ✅ já é lista

    return {
        "modelo": "ia",
        "jogos": jogos
    }
