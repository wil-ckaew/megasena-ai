import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from joblib import dump

CSV_PATH = "../data/megasena.csv"

df = pd.read_csv(CSV_PATH)

# Criar features simples
df['soma'] = df[['bola1','bola2','bola3','bola4','bola5','bola6']].sum()
df['max'] = df[['bola1','bola2','bola3','bola4','bola5','bola6']].max()
df['min'] = df[['bola1','bola2','bola3','bola4','bola5','bola6']].min()

# Usar concursos anteriores como histórico
# Exemplo: usar soma, max, min, pares e impares do concurso anterior
X = []
y = []

for i in range(1, len(df)):
    prev = df.iloc[i-1]
    curr = df.iloc[i]
    X.append([prev['soma'], prev['max'], prev['min'], prev['pares'], prev['impares']])
    y.append(curr[['bola1','bola2','bola3','bola4','bola5','bola6']].values)

X = np.array(X)
y = np.array(y)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

print("Treinamento concluído!")
print("Score no teste:", model.score(X_test, y_test))

# Salvar modelo
dump(model, "model_rf.joblib")
