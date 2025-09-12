"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import "./quizIntro.css";

function Page() {
    const params = useSearchParams();
    const router = useRouter();
    const title = params.get("title") || "Rhesus Factor Quiz Game";

    return (
        <div className="modal-backdrop" onClick={() => router.push("/pages/gameLobby")}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" aria-label="Close" onClick={() => router.push("/pages/gameLobby")}>×</button>
                <h2 className="modal-title">{title}</h2>
                <p className="modal-sub">
                    Test your knowledge about the Rhesus blood group system with this interactive quiz!
                </p>
                <button className="primary-btn" onClick={() => router.push("/pages/gameLobby/quizPlay")}>Start Quiz</button>
            </div>
        </div>
    );
}

export default Page;


