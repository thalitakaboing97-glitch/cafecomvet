import "./App.css";

function App() {
  // LISTA DOS VETERINÁRIOS
  const veterinarios = [
    { nome: "Licia", pontos: 2 },
    { nome: "Juca", pontos: 4 },
    { nome: "Barbarah", pontos: 6 },
    { nome: "Leandro", pontos: 8 },
    { nome: "Liz", pontos: 15 },
    { nome: "Tomas", pontos: 6 },
    { nome: "Luiz", pontos: 7 },
    { nome: "Bruno", pontos: 9 },
    { nome: "Liana", pontos: 1 },
    { nome: "Tatiana", pontos: 10 },
  ];

  // ORDENA POR MAIOR PONTUAÇÃO
  veterinarios.sort((a, b) => b.pontos - a.pontos);

  return (
    <div className="container">
      <h1>🏆 Ranking Organnact</h1>
      <p className="sub">Meta: 48 pontos</p>

      {veterinarios.map((v) => {
        const porcentagem = Math.min((v.pontos / 48) * 100, 100);
        const venceu = v.pontos >= 48;

        return (
          <div className="item" key={v.nome}>
            <div className="nome">
              {v.nome} {venceu && <span className="vencedor">🏆 VENCEU!</span>}
            </div>
            <div className="pontos">{v.pontos} pts</div>

            <div className="barra">
              <div
                className="progresso"
                style={{ width: `${porcentagem}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
