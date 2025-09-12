"use client";
import React, { useState } from "react";
import "./settings.css";

function Page() {
    const [notifications, setNotifications] = useState(true);
    const [sound, setSound] = useState(false);

    return (
        <div className="settings-root">
            <header className="settings-top">
                <div className="brand">
                    <div className="logo" />
                    <span className="brand-name">GeneWell</span>
                </div>
                <div className="right">
                    <button className="logout">↪ Log Out</button>
                    <img className="avatar" src="https://i.pravatar.cc/28?img=11" alt="avatar" />
                </div>
            </header>

            <main className="settings-main">
                <h1 className="title">Settings</h1>

                <section className="card">
                    <h3 className="section-title">Profile</h3>
                    <label className="field">
                        <span className="label">Name</span>
                        <input type="text" placeholder="" />
                    </label>

                    <div className="row picture">
                        <div className="avatar-lg">
                            <img src="https://i.pravatar.cc/64?img=32" alt="Profile" />
                        </div>
                        <div className="pic-meta">
                            <div className="label">Profile Picture</div>
                        </div>
                        <button className="chevron" aria-label="change" />
                    </div>
                </section>

                <section className="card">
                    <h3 className="section-title">Preferences</h3>
                    <div className="row">
                        <div className="row-text">
                            <div className="row-title">Notifications</div>
                            <div className="row-sub">Receive notifications about game updates and health tips.</div>
                        </div>
                        <label className="switch">
                            <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />
                            <span className="slider" />
                        </label>
                    </div>

                    <div className="row">
                        <div className="row-text">
                            <div className="row-title">Sound</div>
                            <div className="row-sub">Turn off sound effects and background music volume.</div>
                        </div>
                        <label className="switch">
                            <input type="checkbox" checked={sound} onChange={(e) => setSound(e.target.checked)} />
                            <span className="slider" />
                        </label>
                    </div>
                </section>

                <section className="card">
                    <h3 className="section-title">Account</h3>
                    <button className="row link">
                        <div className="row-title">Change Password</div>
                        <span className="chev">›</span>
                    </button>
                    <button className="row link danger">
                        <div className="row-title">Delete Account</div>
                        <span className="chev">›</span>
                    </button>
                </section>
            </main>
        </div>
    );
}

export default Page;


