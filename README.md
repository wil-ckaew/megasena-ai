# 🎯 MegaSena IA

Sistema completo para **geração inteligente de jogos da Mega-Sena**, combinando:
- 📊 Modelos estatísticos
- 🧠 Inteligência Artificial
- 🌐 Frontend moderno e responsivo
- 🐳 Execução simples via Docker

O projeto foi pensado para ser **simples de rodar**, **bonito de usar** e **fácil de evoluir**.

---

## 🚀 Visão Geral

O sistema é composto por três partes principais:

### 🔹 Backend (Rust)
Responsável por:
- Orquestrar as requisições
- Expor endpoints HTTP
- Integrar modelos estatísticos e IA

### 🔹 IA / ML (Python)
Responsável por:
- Processar dados históricos
- Gerar jogos usando algoritmos estatísticos e modelos de IA
- Retornar jogos no formato padronizado

### 🔹 Frontend (Next.js + TailwindCSS)
Responsável por:
- Interface moderna e responsiva
- Exibição clara dos jogos gerados
- Experiência visual elegante e agradável

---

## 🧩 Estrutura do Projeto

megasena-ai/
├── backend/ # Backend em Rust
├── ia-python/ # API de IA em Python (FastAPI)
├── frontend/ # Frontend Next.js + Tailwind
├── docker-compose.yml # Orquestração dos serviços
└── README.md

---

## 🐳 Como Executar (Docker)

### Pré-requisitos
- Docker
- Docker Compose

### Subir tudo com um comando

```bash
docker-compose up --build

🌐 Endpoints Principais
Backend
http://localhost:8080

IA / ML
http://localhost:8000/gerar/ia

http://localhost:8000/gerar/estatistico

Frontend
http://localhost:3000

🎨 Interface
Layout moderno

Tela em gradiente

Resultados exibidos de forma clara

Totalmente responsivo (desktop e mobile)

🧠 Modelos Disponíveis
✔ Estatístico tradicional

✔ IA baseada em dados históricos

✔ Possibilidade de expansão para novos modelos

🔒 Observações Importantes
Este sistema não garante ganhos em loterias

O objetivo é estudo, estatística e experimentação com IA

Loterias são jogos de azar

🛠 Tecnologias Utilizadas
Rust (Axum)

Python (FastAPI, Pandas, Scikit-learn)

Next.js 14

TailwindCSS

Docker & Docker Compose

📈 Próximas Evoluções (Opcional)
Histórico de jogos gerados

Score de confiança por jogo

Comparação entre modelos

Dashboard analítico

Persistência em banco de dados

👨‍💻 Autor
Projeto desenvolvido para estudo e experimentação com:
Rust + IA + Frontend moderno

Se quiser evoluir, refatorar ou profissionalizar — o projeto já está pronto para isso 🚀

🎯 Boa sorte e bons estudos!
