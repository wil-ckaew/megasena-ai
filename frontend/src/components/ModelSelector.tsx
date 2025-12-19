"use client";

import { useState } from "react";
import Resultados from "./Resultados";

type ApiResponse = {
  modelo: string;
  jogos: number[][];
};

export default function ModelSelector() {
  const [modelo, setModelo] = useState<"a" | "b">("a");
  const [resultado, setResultado] = useState<number[][]>([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function gerar() {
    setLoading(true);
    setErro("");
    setResultado([]);

    try {
      const res = await fetch("/api/jogos?modelo=" + modelo, {
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Erro");

      const data: ApiResponse = await res.json();
      setResultado(data.jogos);
    } catch {
      setErro("❌ Erro ao gerar jogos");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 h-[70vh] flex flex-col">
      {/* CONTROLES */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">
          {modelo === "a" ? "📊 Estatístico Avançado" : "🧠 Inteligência Artificial"}
        </h2>
        <p className="text-sm text-gray-500">
          Modelo: {modelo === "a" ? "estatistico_csv" : "ia"}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
        <select
          value={modelo}
          onChange={(e) => setModelo(e.target.value as "a" | "b")}
          className="px-4 py-2 rounded-xl border shadow-sm"
        >
          <option value="a">📊 Estatístico</option>
          <option value="b">🧠 IA</option>
        </select>

        <button
          onClick={gerar}
          disabled={loading}
          className="px-8 py-2 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition"
        >
          {loading ? "Gerando..." : "Gerar Jogos"}
        </button>
      </div>

      {erro && <p className="text-red-500 text-center">{erro}</p>}

      {/* RESULTADOS (SEM SCROLL DA PÁGINA) */}
      <div className="flex-1 overflow-hidden mt-4">
        <Resultados jogos={resultado} />
      </div>
    </div>
  );
}
