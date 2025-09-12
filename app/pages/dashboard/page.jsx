"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./dashboard.css";

function Page() {
  const router = useRouter();
  return (
    <div className="dash-root">
      <aside className="dash-sidebar">
        <div className="brand">
          <div className="logo">G</div>
          <div className="brand-name">GeneWell</div>
        </div>

        <nav className="nav">
          <a className="nav-item active" href="/pages/dashboard">Dashboard</a>
          <a className="nav-item" href="/pages/gameLobby">Game Lobby</a>
          <a className="nav-item" href="/pages/settings">Settings</a>
        </nav>

        <div className="profile">
          <img src="https://i.pravatar.cc/40?img=8" alt="avatar" />
          <div>
            <div className="name">Alex Morgan</div>
            <div className="role">Player</div>
          </div>
        </div>
      </aside>

      <main className="dash-main">
        <header className="topbar">
          <div>
            <h1>Dashboard</h1>
            <p className="muted">Track your progress on Rhesus factor and Blood groups</p>
          </div>
          <div className="top-actions">
            <button className="chip" onClick={() => router.push("/pages/gameLobby")}>▶ Play in Lobby</button>
            <button className="chip metric">💜 750 HP</button>
            <button className="chip metric">🔥 7 Days</button>
            <button className="chip ghost">↩ Log Out</button>
          </div>
        </header>

        <section className="cards">
          <div className="card progress">
            <div className="card-title">Knowledge Progress</div>
            <div className="legend">
              <span className="dot green"></span> Rhesus Factor
              <span className="dot orange" style={{ marginLeft: 16 }}></span> Blood Groups
            </div>

            <div className="metric">
              <div className="metric-title">Rhesus Factor</div>
              <div className="bar">
                <div className="fill green" style={{ width: "72%" }}></div>
              </div>
              <div className="hint">72% mastery</div>
            </div>

            <div className="metric">
              <div className="metric-title">Blood Groups</div>
              <div className="bar">
                <div className="fill orange" style={{ width: "56%" }}></div>
              </div>
              <div className="hint">56% mastery</div>
            </div>
          </div>

          <div className="card leaderboard">
            <div className="card-title">Leaderboard</div>
            <ol className="board">
              <li className="row">
                <span className="pos">1</span>
                <img src="https://i.pravatar.cc/24?img=12" alt="Samir" />
                <span className="name">Samir</span>
                <span className="score">4,980</span>
              </li>
              <li className="row">
                <span className="pos">2</span>
                <img src="https://i.pravatar.cc/24?img=15" alt="Priya" />
                <span className="name">Priya</span>
                <span className="score">4,620</span>
              </li>
              <li className="row active">
                <span className="pos">3</span>
                <img src="https://i.pravatar.cc/24?img=8" alt="You" />
                <span className="name">You</span>
                <span className="score">3,420</span>
              </li>
              <li className="row">
                <span className="pos">4</span>
                <img src="https://i.pravatar.cc/24?img=17" alt="Patel" />
                <span className="name">Patel</span>
                <span className="score">3,400</span>
              </li>
            </ol>
            <p className="muted small">You're climbing fast! Play more rounds to reach #1.</p>
          </div>
        </section>

        <section className="fact">
          <div className="fact-title">💡Quick Health Facts</div>
          <p>
            The Rhesus (Rh) factor is an inherited protein found on the surface of red blood cells.
            If your blood has the protein, you're Rh positive. If your blood lacks the protein,
            you're Rh negative. Rh factor can cause complications during pregnancy if the mother is
            Rh negative and the baby is Rh positive.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Page;
