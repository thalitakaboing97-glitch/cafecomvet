import React, { useEffect, useState } from "react";

/**
 * PÁGINA PRINCIPAL
 * - Busca /data.json (arquivo em public/)
 * - Mostra pódio (top 3) e lista completa
 * - Cores Organnact
 */

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const META = 48;

  useEffect(() => {
    fetch("/data.json")
      .then((r) => r.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setData([]);
        setLoading(false);
      });
  }, []);

  const sorted = [...data].sort((a, b) => b.points - a.points);
  const podium = sorted.slice(0, 3);

  return (
    <div className="min-h-screen bg-orgaGray flex flex-col items-center py-10">
      {/* Top bar with logo */}
      <header className="w-full max-w-4xl px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Organnact" className="w-36" />
            <div>
              <h1 className="text-2xl font-bold text-orgaBlack">Café com Vet</h1>
              <p className="text-sm text-gray-600">Ranking de Prescrição • Organnact</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="w-full max-w-4xl mt-8 px-4">
        {/* Pódio */}
        <section className="bg-white rounded-2xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Pódio</h2>

          <div className="flex items-end justify-center gap-6">
            {/* 2º */}
            <PodiumCard
              rank={2}
              person={podium[1]}
              borderColor="orgaOrange"
              height="h-36"
            />
            {/* 1º */}
            <PodiumCard
              rank={1}
              person={podium[0]}
              borderColor="orgaYellow"
              height="h-44"
              first
            />
            {/* 3º */}
            <PodiumCard
              rank={3}
              person={podium[2]}
              borderColor="orgaOrange"
              height="h-28"
            />
          </div>
        </section>

        {/* Ranking completo */}
        <section className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Ranking completo</h2>
            <div className="text-sm text-gray-600">Meta: {META} pts</div>
          </div>

          {loading ? (
            <p className="text-gray-600">Carregando...</p>
          ) : (
            <ul className="space-y-3">
              {sorted.map((p, idx) => {
                const pct = Math.min(Math.round((p.points / META) * 100), 100);
                const isWinner = p.points >= META;
                return (
                  <li
                    key={p.name}
                    className="flex items-center justify-between gap-4 p-3 rounded-lg bg-emerald-50/10"
                  >
                    <div>
                      <div className="text-sm text-gray-700 font-semibold">
                        {idx + 1}. {p.name} {isWinner && <span className="text-orgaYellow">🏆 VENCEU</span>}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {p.points} pts — {pct}% da meta
                      </div>
                    </div>

                    <div className="w-48">
                      <div className="h-3 bg-gray-200 rounded overflow-hidden">
                        <div
                          style={{ width: `${pct}%` }}
                          className="h-full bg-orgaYellow"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>

      <footer className="w-full max-w-4xl px-4 mt-8 text-center text-sm text-gray-500">
        Organnact • Café com Vet — Feito por Thata
      </footer>
    </div>
  );
}

/* Subcomponent: PodiumCard */
function PodiumCard({ rank, person = {}, borderColor, height = "h-32", first = false }) {
  const rankEmoji = rank === 1 ? "🥇" : rank === 2 ? "🥈" : "🥉";
  const borderClass = {
    orgaYellow: "border-t-8 border-orgaYellow",
    orgaOrange: "border-t-8 border-orgaOrange",
  }[borderColor] || "";

  return (
    <div className={`flex flex-col items-center ${height}`}>
      <div className="text-3xl">{rankEmoji}</div>
      <div className={`bg-white p-4 rounded-xl shadow ${borderClass} w-48 flex flex-col items-center justify-center ${first ? "p-6" : ""}`}>
        <div className="font-semibold text-gray-800 text-lg">
          {person ? person.name : "—"}
        </div>
        <div className="text-gray-600 mt-1">{person ? person.points + " pts" : "—"}</div>
      </div>
    </div>
  );
}
import Ranking from "./components/Ranking";

function App() {
  return (
    <div className="app-container">
      <Ranking />
    </div>
  );
}

export default App;
