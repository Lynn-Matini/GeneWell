"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "./quizResult.css";

function Page() {
  const router = useRouter();
  const params = useSearchParams();
  const title = params.get("title") || "Rhesus Factor Quiz";
  const score = Number(params.get("score") || 0);
  const total = Number(params.get("total") || 0);

  return (
    <div className="modal-backdrop" onClick={() => router.push("/pages/gameLobby")}>
      <div className="result-modal" onClick={(e) => e.stopPropagation()}>
        <div className="result-header">
          <span className="title">{title}</span>
          <button className="close" aria-label="Close" onClick={() => router.push("/pages/gameLobby")}>×</button>
        </div>

        <div className="result-body">
          <h2>Quiz Complete!</h2>
          <p>Your score: <strong>{score}</strong> out of <strong>{total}</strong></p>
          <div className="actions">
            <button className="primary" onClick={() => router.push(`/pages/gameLobby/quizPlay?title=${encodeURIComponent(title)}`)}>Play Again</button>
            <button className="secondary" onClick={() => router.push("/pages/gameLobby")}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
