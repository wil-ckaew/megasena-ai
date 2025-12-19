import ModelSelector from "../components/ModelSelector";

export default function Home() {
  return (
    <main className="
      h-screen w-full
      bg-gradient-to-br from-green-50 to-green-100
      flex flex-col items-center justify-center
      px-4
    ">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-extrabold text-center mb-2">
          🎯 MegaSena IA
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Geração inteligente de jogos baseada em dados históricos e inteligência artificial
        </p>

        <ModelSelector />
      </div>
    </main>
  );
}
