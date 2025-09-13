"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./lobby.css";

function Page() {
  const router = useRouter();

  return (
    <div className="lobby-root">
      <header className="lobby-top">
        <div className="left">
          <div className="brand">
            <div className="logo" />
            <span className="brand-name">GeneWell</span>
          </div>
          <nav className="links">
            <a className="link" href="/pages/dashboard">Home </a>
            <a className="link" href="/pages/gameLobby">Games</a>
            <a className="link" href="/pages/settings">Settings</a>
          </nav>
        </div>
        <div className="right">
          <button className="logout">⟲ Log Out</button>
          <img className="avatar" src="https://i.pravatar.cc/28?img=5" alt="avatar" />
        </div>
      </header>

      <main className="lobby-main">
        <h1 className="title">Game Lobby</h1>
        <p className="muted">Explore a variety of quizzes and games to enhance your health knowledge.</p>

        <div className="search">
          <span className="icon">🔍</span>
          <input placeholder="Search for games" />
        </div>

        <div className="chips">
          <button className="chip">Rhesus Factor</button>
          <button className="chip">Blood Groups</button>
          <button className="chip">General Health</button>
        </div>

        <h3 className="section-title">Available Games</h3>

        <div className="game-list">
          <article className="game">
            <div className="info">
              <h4>Rhesus Factor Quiz</h4>
              <p className="muted">Test your knowledge about Rhesus factor and its implications.</p>
              <button className="play" onClick={() => router.push("/pages/gameLobby/quizIntro?title=Rhesus%20Factor%20Quiz")}>Play</button>
            </div>
            <div className="thumb thumb-red"></div>
          </article>

          <article className="game">
            <div className="info">
              <h4>Blood Group Challenge</h4>
              <p className="muted">Identify different blood groups and their compatibility.</p>
              <button className="play" onClick={() => router.push("/pages/gameLobby/quizIntro?title=Blood%20Group%20Challenge")}>Play</button>
            </div>
            <div className="thumb thumb-amber"></div>
          </article>

          <article className="game">
            <div className="info">
              <h4>Health Trivia</h4>
              <p className="muted">General health knowledge quiz covering various topics.</p>
              <button className="play" onClick={() => router.push("/pages/gameLobby/quizIntro?title=Health%20Trivia")}>Play</button>
            </div>
            <div className="thumb thumb-green"></div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default Page;
