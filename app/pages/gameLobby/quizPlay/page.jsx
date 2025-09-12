"use client";
import React, { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "./quizPlay.css";

function Page() {
    const router = useRouter();
    const params = useSearchParams();
    const title = params.get("title") || "Rhesus Factor Quiz";

    const questions = useMemo(() => ([
        {
            id: 1,
            text: "What does Rh+ and Rh− indicate in blood typing?",
            options: [
                "A. Blood color",
                "B. Presence or absence of Rhesus factor",
                "C. Blood thickness",
                "D. Blood cell count",
            ],
            correctIndex: 1,
            image:
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=900&auto=format&fit=crop",
            hint: "Rh refers to a specific antigen on red blood cells.",
        },
        {
            id: 2,
            text: "Which blood type is the universal donor?",
            options: ["A. AB+", "B. O-", "C. B+", "D. A-"],
            correctIndex: 1,
            image:
                "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=900&auto=format&fit=crop",
            hint: "It lacks A, B, and Rh antigens.",
        },
        {
            id: 3,
            text: "What can happen if an Rh- mother carries an Rh+ baby?",
            options: [
                "A. No effect",
                "B. Hemolytic disease of the newborn",
                "C. Change in mother’s blood type",
                "D. Instant anemia in mother",
            ],
            correctIndex: 1,
            image:
                "https://images.unsplash.com/photo-1580281657527-47d9c3fda3c7?q=80&w=900&auto=format&fit=crop",
            hint: "Maternal antibodies can attack fetal red cells.",
        },
        {
            id: 4,
            text: "What is used to prevent Rh sensitization in pregnancy?",
            options: ["A. Penicillin", "B. Rho(D) immune globulin", "C. Vitamin C", "D. Insulin"],
            correctIndex: 1,
            image:
                "https://images.unsplash.com/photo-1584367369853-8b966cf22161?q=80&w=900&auto=format&fit=crop",
            hint: "It’s an anti-D injection.",
        },
    ]), []);

    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showHint, setShowHint] = useState(false);
    const [score, setScore] = useState(0);

    const q = questions[index];
    const progress = Math.round(((index + 1) / questions.length) * 100);

    function next() {
        if (selected !== null && selected === q.correctIndex) {
            setScore((s) => s + 1);
        }
        if (index < questions.length - 1) {
            setIndex(index + 1);
            setSelected(null);
            setShowHint(false);
        } else {
            const finalScore = (selected !== null && selected === q.correctIndex) ? score + 1 : score;
            const url = `/pages/gameLobby/quizResult?title=${encodeURIComponent(title)}&score=${finalScore}&total=${questions.length}`;
            router.push(url);
        }
    }

    return (
        <div className="modal-backdrop" onClick={() => router.push("/pages/gameLobby")}>
            <div className="play-modal" onClick={(e) => e.stopPropagation()}>
                <div className="play-header">
                    <span className="title">{title}</span>
                    <button className="close" aria-label="Close" onClick={() => router.push("/pages/gameLobby")}>×</button>
                </div>

                <div className="play-subhead">
                    <div>Question <strong>{index + 1}</strong> of <strong>{questions.length}</strong></div>
                    <div className="progress-wrap">
                        <div className="bar"><div className="fill" style={{ width: `${progress}%` }} /></div>
                        <span className="pct">{progress}%</span>
                    </div>
                </div>

                <div className="play-body">
                    <div className="qa">
                        <h3 className="question">{q.text}</h3>
                        <div className="options">
                            {q.options.map((opt, i) => (
                                <button
                                    key={i}
                                    className={`option ${selected === i ? "selected" : ""}`}
                                    onClick={() => setSelected(i)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>

                        <button className="hint" onClick={() => setShowHint((v) => !v)}>
                            {showHint ? "Hide hint" : "Show hint"}
                        </button>
                        {showHint && <div className="hint-box">{q.hint}</div>}
                    </div>

                    <div className="figure">
                        <img src={q.image} alt="context" />
                    </div>
                </div>

                <div className="play-footer">
                    <button className="primary" onClick={next}>{index === questions.length - 1 ? "Finish" : "Next"}</button>
                </div>
            </div>
        </div>
    );
}

export default Page;


