"use client";
import React from "react";
import "./login.css";

function Page() {
  return (
    <div className="signup-container">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">G</div>
          <div className="brand-name">GeneWell</div>
        </div>
        <h2 className="headline">Welcome back, Challenger</h2>
        <p className="subhead">
          Sign in to keep earning Health Points, climb the leaderboard, and continue your streak.
        </p>

        <button className="sidebar-btn">🔒 Secure account protection</button>
        <button className="sidebar-btn">📈 Track your daily progress</button>
        <button className="sidebar-btn">🤝 Compete with friends</button>
      </aside>

      <main className="form-section">
        <div className="signup-card">
          <div className="card-header">
            <h3>Sign in</h3>
            <p className="muted">Enter your details to access the dashboard and lobby.</p>
          </div>

          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <label className="field">
              <span className="label">Email</span>
              <input type="email" placeholder="you@example.com" />
            </label>

            <label className="field">
              <span className="label">Password</span>
              <input type="password" placeholder="•••••••" />
            </label>

            <div className="meta-row">
              <label className="remember">
                <input type="checkbox" /> <span>Remember me</span>
              </label>
              <a className="muted link" href="/auth/forgotPassword">Forgot password?</a>
            </div>

            <button type="submit" className="primary-btn">
              <span className="btn-icon">↪️</span> Continue
            </button>

            <button type="button" className="secondary-btn" style={{ marginTop: 10 }}>
              <span className="btn-icon">✉️</span> Magic link to email
            </button>

            <div className="divider"><span>or</span></div>

            <button type="button" className="secondary-btn">
              <span className="btn-icon">☑️</span> Sign in with one-time code
            </button>
          </form>

          <p className="signin-text">
            New to GeneWell? <a href="/auth/signup">Create account</a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Page;
