import React from "react";
import logo from "./assets/logo.png"; // coloque a logo em /src/assets/

export default function App() {
  const podium = [
    { pos: 1, name: "Fulano", score: 120 },
    { pos: 2, name: "Ciclano", score: 110 },
    { pos: 3, name: "Beltrano", score: 95 },
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F7] flex flex-col items-center p-6">
      
      {/* LOGO */}
      <img
        src={logo}
        alt="Organnact Logo"
        className="w-40 mb-10 drop-shadow-md"
      />

      {/* Título */}
      <h1 className="text-3xl font-bold text-[#000] mb-10 text-center">
        Ranking – Café com Vet ☕
      </h1>

      {/* PÓDIO */}
      <div className="flex items-end justify-center gap-6 mt-10">

        {/* 2º lugar */}
        <div className="flex flex-col items-center">
          <div className="text-4xl">🥈</div>
          <div className="bg-white shadow-xl p-4 rounded-xl w-40 text-center border-t-8 border-[#F9A825]">
            <h2 className="font-semibold text-xl">{podium[1].name}</h2>
            <p className="text-gray-600">{podium[1].score} pts</p>
          </div>
        </div>

        {/* 1º lugar */}
        <div className="flex flex-col items-center">
          <div className="text-5xl">🥇</div>
          <div className="bg-white shadow-xl p-6 rounded-xl w-48 text-center border-t-8 border-[#FFCC00]">
            <h2 className="font-bold text-2xl">{podium[0].name}</h2>
            <p className="text-gray-700 text-lg font-semibold">{podium[0].score} pts</p>
          </div>
        </div>

        {/* 3º lugar */}
        <div className="flex flex-col items-center">
          <div className="text-4xl">🥉</div>
          <div className="bg-white shadow-xl p-4 rounded-xl w-40 text-center border-t-8 border-[#FF9800]">
            <h2 className="font-semibold text-xl">{podium[2].name}</h2>
            <p className="text-gray-600">{podium[2].score} pts</p>
          </div>
        </div>

      </div>
    </div>
  );
}
