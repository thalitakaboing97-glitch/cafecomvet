import { useEffect, useState } from "react";

const participantsData = [
  { name: "Dra. Lorrana", score: 28 },
  { name: "Dra. Jéssica", score: 22 },
  { name: "Dra. Lindalva", score: 10 },
  { name: "Dra. Wandila", score: 7 },
  { name: "Dr. Davi", score: 3 },
];

const META = 48;
const podiumBadges = ["🥇", "🥈", "🥉"];
const podiumColors = ["#FFCC00", "#F9A825", "#CD7F32"]; // cores da marca / pódio

export default function Ranking() {
  const [participants, setParticipants] = useState(participantsData);

  return (
    <div className="racing-container p-4 max-w-3xl mx-auto">
      {participants
        .sort((a, b) => b.score - a.score)
        .map((p, idx) => {
          const pct = Math.min((p.score / META) * 100, 100);

          return (
            <div
              key={p.name}
              className="racing-lane mb-6 bg-white rounded-xl shadow-md p-4 sm:p-6"
              style={{
                borderLeft: idx < 3 ? `6px solid ${podiumColors[idx]}` : "none",
              }}
            >
              {/* Info do participante */}
              <div className="participant-info flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
                <div className="flex items-center gap-3">
                  {idx < 3 && <span className="text-2xl">{podiumBadges[idx]}</span>}
                  <div className="participant-name font-semibold text-gray-800">
                    {idx + 1}. {p.name}
                  </div>
                </div>
                <div className="participant-score text-gray-700">{p.score} pts</div>
              </div>

              {/* Pista / barra de progresso */}
              <div className="track-container relative h-8 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="progress-bar h-full bg-[#FFCC00] transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                  style={{ width: `${pct}%` }}
                >
                  <span className="doctor-emoji-running animate-bounce">👩‍⚕️</span>
                </div>
                <div className="finish-line absolute right-0 top-0 h-full flex items-center px-2">
                  <span className="checkered-flag text-xl">🏁</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
