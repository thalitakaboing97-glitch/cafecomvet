export default function Ranking() {
  return (
    <div className="racing-container">

      {/* 1º Lugar */}
      <div className="racing-lane">
        <div className="participant-info">
          <div className="rank-badge">#1 🥇</div>
          <div className="name-score">
            <div className="participant-name">Dra. Lorrana</div>
            <div className="participant-score">28 pts</div>
          </div>
        </div>

        <div className="track-container">
          <div className="track">
            <div className="progress-bar" style={{ width: "58.3333%" }}>
              <span className="doctor-emoji-running">👩‍⚕️</span>
            </div>
          </div>
          <div className="finish-line">
            <div className="checkered-flag">🏁</div>
          </div>
        </div>
      </div>

      {/* 2º Lugar */}
      <div className="racing-lane">
        <div className="participant-info">
          <div className="rank-badge">#2 🥈</div>
          <div className="name-score">
            <div className="participant-name">Dra. Jéssica</div>
            <div className="participant-score">22 pts</div>
          </div>
        </div>

        <div className="track-container">
          <div className="track">
            <div className="progress-bar" style={{ width: "45.8333%" }}>
              <span className="doctor-emoji-running">👩‍⚕️</span>
            </div>
          </div>
          <div className="finish-line">
            <div className="checkered-flag">🏁</div>
          </div>
        </div>
      </div>

      {/* 3º Lugar */}
      <div className="racing-lane">
        <div className="participant-info">
          <div className="rank-badge">#3 🥉</div>
          <div className="name-score">
            <div className="participant-name">Dra. Lindalva</div>
            <div className="participant-score">10 pts</div>
          </div>
        </div>

        <div className="track-container">
          <div className="track">
            <div className="progress-bar" style={{ width: "20.8333%" }}>
              <span className="doctor-emoji-running">👩‍⚕️</span>
            </div>
          </div>
          <div className="finish-line">
            <div className="checkered-flag">🏁</div>
          </div>
        </div>
      </div>

      {/* (Continue com os outros da mesma forma...) */}

    </div>
  );
}
