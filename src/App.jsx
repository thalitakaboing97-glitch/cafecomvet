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

function ProgressBar({ score }) {
  const widthPercent = Math.min((score / MAX_SCORE) * 100, 100);
  return (
    <div className="w-full bg-gray-200 rounded-full h-8 relative">
      <div
        className="bg-green-500 h-8 flex items-center justify-end rounded-l-full"
        style={{ width: `${widthPercent}%` }}
      >
        <span className="text-lg mr-2">{score > 0 ? "🏃" : ""}</span>
      </div>
      <div className="absolute right-0 top-0 h-full flex items-center pr-2">
        <span className="text-xl">🏁</span>
      </div>
    </div>
  );
}

function RacingLane({ participant, rank }) {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-1">
        <div className="w-8 h-8 flex items-center justify-center bg-yellow-300 rounded-full font-bold">
          #{rank}
        </div>
        <div className="ml-2">
          <p className="font-semibold">{participant.name}</p>
          <p className="text-sm text-gray-600">{participant.score} pts</p>
        </div>
      </div>
      <ProgressBar score={participant.score} />
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
      <div className={`barra ${index === 0 ? 'lider' : ''}`} ... ></div>


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
