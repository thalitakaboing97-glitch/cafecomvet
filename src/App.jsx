import React from "react";
import Footer from "./Footer";

const participants = [
  { name: "Dra. Lorrana", score: 8, emoji: "👩‍⚕️" },
  { name: "Dra. Jéssica", score: 9, emoji: "👩‍⚕️" },
  { name: "Dra. Lindalva", score: 10, emoji: "👩‍⚕️" },
  { name: "Dra. Wandila", score: 7, emoji: "👩‍⚕️" },
  { name: "Dr. Davi", score: 3, emoji: "👨‍⚕️" },
  { name: "Dr. Carlos", score: 0, emoji: "👨‍⚕️" },
  { name: "Dra. Íris", score: 0, emoji: "👩‍⚕️" },
];

const MAX_SCORE = 48;

// --- Cores Organnact ---
const colors = {
  gold: "#FFD700",
  silver: "#C0C0C0",
  bronze: "#CD7F32",
  barDefault: "#4CAF50", // verde Organnact
  badgeDefault: "#A3D3A1", // tom suave de verde
  background: "#E8F5E9", // fundo suave
};

function ProgressBar({ score, rank }) {
  const widthPercent = Math.min((score / MAX_SCORE) * 100, 100);

  let barColor = colors.barDefault;
  if (rank === 1) barColor = colors.gold;
  else if (rank === 2) barColor = colors.silver;
  else if (rank === 3) barColor = colors.bronze;

  return (
    <div className="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden shadow-sm">
      <div
        className="h-8 flex items-center justify-end rounded-l-full transition-all duration-1000 ease-out"
        style={{ width: `${widthPercent}%`, backgroundColor: barColor }}
      >
        <span className="text-lg mr-2 animate-pulse">{score > 0 ? "🏃" : ""}</span>
      </div>
      <div className="absolute right-0 top-0 h-full flex items-center pr-2">
        <span className="text-xl">🏁</span>
      </div>
    </div>
  );
}

function RacingLane({ participant, rank }) {
  const medal = rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : "";
  let badgeColor = colors.badgeDefault;
  if (rank === 1) badgeColor = colors.gold;
  else if (rank === 2) badgeColor = colors.silver;
  else if (rank === 3) badgeColor = colors.bronze;

  return (
    <div className="mb-4">
      <div className="flex items-center mb-1">
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full font-bold text-white shadow-md"
          style={{ backgroundColor: badgeColor }}
        >
          #{rank} {medal}
        </div>
        <div className="ml-3">
          <p className="font-semibold text-gray-800">{participant.name}</p>
          <p className="text-sm text-gray-600">{participant.score} pts</p>
        </div>
      </div>
      <ProgressBar score={participant.score} rank={rank} />
    </div>
  );
}

function App() {
  // Ordena os participantes do maior para o menor score
  const sortedParticipants = [...participants].sort((a, b) => b.score - a.score);

  return (
    <div className="min-h-screen flex flex-col items-center p-4" style={{ backgroundColor: colors.background }}>
      <header className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">🏆 Corrida Organnact</h1>
        <p className="text-gray-600">Ao atingir 48 pontos, vence!</p>
      </header>

      <div className="w-full max-w-xl px-2 sm:px-4">
        {sortedParticipants.map((p, index) => (
          <RacingLane key={index} participant={p} rank={index + 1} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;


