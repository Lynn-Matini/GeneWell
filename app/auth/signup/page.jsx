"use client";
import React from "react";
import "./signup.css";

function Page() {
    return (
        <div className="signup-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="brand">
                    <div className="logo">G</div>
                    <div className="brand-name">GeneWell</div>
                </div>
                <h2 className="headline">Level up your health IQ</h2>
                <p className="subhead">
                    Join GeneWell to learn Rhesus factor and blood groups through quick
                    games and challenges.
                </p>

                <button className="sidebar-btn">🔹 Bite-size lessons and quizzes</button>
                <button className="sidebar-btn">🔸 Earn Health Points and badges</button>
                <button className="sidebar-btn">👑 Compete on leaderboards</button>
            </aside>

            {/* Background + Card */}
            <main className="form-section">
                <div className="signup-card">
                    <div className="card-header">
                        <h3>Create your account</h3>
                        <p className="muted">
                            Start with a free profile. Track progress, earn points, and play in the lobby.
                        </p>
                    </div>

                    <form className="form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-row">
                            <label className="field">
                                <span className="label">First name</span>
                                <input type="text" placeholder="Alex" />
                            </label>
                            <label className="field">
                                <span className="label">Last name</span>
                                <input type="text" placeholder="Morgan" />
                            </label>
                        </div>

                        <label className="field">
                            <span className="label">Email</span>
                            <input type="email" placeholder="alex@example.com" />
                        </label>

                        <label className="field">
                            <span className="label">Password</span>
                            <input type="password" placeholder="•••••••" />
                            <br />
                        </label>

                        
                        <label className="checkbox">
                            <input type="checkbox" defaultChecked /> I agree to the <a href="#">Terms</a> and <a href="#">Privacy</a>
                        </label>

                        <button type="submit" className="primary-btn">
                            <span className="btn-icon">👤</span> Create account
                        </button>

                        <div className="divider"><span>—————————————— or ——————————————</span></div>

                        <button className="secondary-btn">
                            <span className="btn-icon">✉️</span> Continue with Email
                        </button>
                    </form>

                    <p className="signin-text">
                        Already have an account? <a href="/auth/login">Sign in</a>
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Page;
