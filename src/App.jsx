import React from "react";
import Footer from "./Footer";

const participants = [
  { name: "Dra. Lorrana", score: 28, emoji: "👩‍⚕️" },
  { name: "Dra. Jéssica", score: 22, emoji: "👩‍⚕️" },
  { name: "Dra. Lindalva", score: 10, emoji: "👩‍⚕️" },
  { name: "Dra. Wandila", score: 7, emoji: "👩‍⚕️" },
  { name: "Dr. Davi", score: 3, emoji: "👨‍⚕️" },
  { name: "Dr. Carlos", score: 0, emoji: "👨‍⚕️" },
  { name: "Dra. Íris", score: 0, emoji: "👩‍⚕️" },
];

const MAX_SCORE = 48;

function ProgressBar({ score, rank }) {
  const widthPercent = Math.min((score / MAX_SCORE) * 100, 100);

  // Cores especiais para pódio
  let barColor = "bg-gray-400";
  if (rank === 1) barColor = "bg-yellow-400"; // ouro
  else if (rank === 2) barColor = "bg-gray-400"; // prata
  else if (rank === 3) barColor = "bg-amber-700"; // bronze

  return (
    <div className="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
      <div
        className={`${barColor} h-8 flex items-center justify-end rounded-l-full transition-all duration-1000 ease-out`}
        style={{ width: `${widthPercent}%` }}
      >
        <span className="animate-run text-lg mr-2">{score > 0 ? "🏃" : ""}</span>
      </div>
      <div className="absolute right-0 top-0 h-full flex items-center pr-2">
        <span className="text-xl">🏁</span>
      </div>
    </div>
  );
}


function RacingLane({ participant, rank }) {
  // Emoji pódio
  const medal = rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : "";

  return (
    <div className="mb-4">
      <div className="flex items-center mb-1">
        <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold
            ${rank === 1 ? "bg-yellow-400" : rank === 2 ? "bg-gray-400" : rank === 3 ? "bg-amber-700" : "bg-gray-300"}`}>
          #{rank} {medal}
        </div>
        <div className="ml-2">
          <p className="font-semibold">{participant.name}</p>
          <p className="text-sm text-gray-600">{participant.score} pts</p>
        </div>
      </div>
      <ProgressBar score={participant.score} rank={rank} />
    </div>
  );
}


function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">🏆 Corrida Organnact</h1>
        <p className="text-gray-600">Ao atingir 48 pontos, vence!</p>
      </header>
     


      <div className="w-full max-w-xl">
        {participants.map((p, index) => (
          <RacingLane key={index} participant={p} rank={index + 1} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
