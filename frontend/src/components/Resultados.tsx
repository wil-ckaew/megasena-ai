// frontend/src/components/Resultados.tsx
type Props = {
  jogos: number[][];
};

export default function Resultados({ jogos }: Props) {
  if (jogos.length === 0) return null;

  return (
    <div className="h-full overflow-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jogos.map((jogo, i) => (
          <div
            key={i}
            className="rounded-2xl bg-green-50 border border-green-200 p-4 shadow-sm"
          >
            <h3 className="font-semibold mb-2 text-center">
              Jogo {i + 1}
            </h3>

            <div className="flex flex-wrap justify-center gap-2">
              {jogo.map((n, idx) => (
                <span
                  key={idx}
                  className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
