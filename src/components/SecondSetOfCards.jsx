import React from "react";
import { useEffect, useState } from "react";

function SecondSetCards({ techList, questions, User }) {
    return (
        <div className="secondline Flex-column">
            <div className="secondCard Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
                <h2 className="recent-title font-semibold text-[var(--black)]">Recent Users</h2>
                <div className="Inside-technology">
                    {User.slice(-3).map((tech, idx) => {
                        const percentage = ((tech.score / 15) * 100).toFixed(0);
                        const [progress, setProgress] = useState(0);

                        useEffect(() => {
                            const timeout = setTimeout(() => {
                                setProgress(percentage);
                            }, 50);
                            return () => clearTimeout(timeout);
                        }, [percentage]);

                        return (
                            <div key={idx} className="User-inside text-[var(--black)]">
                                <div className="UserName">
                                    {tech.name}
                                    <span className="tag blue">{`${percentage}%`}</span>
                                </div>
                                <div className="ProgressBar">
                                    <div
                                        className="ProgressFill"
                                        style={{
                                            width: `${progress}%`,
                                            transition: "width 1s ease-in-out"
                                        }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="secondCard Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
                <h2 className="recent-title text-[var(--black)]">Recent Questions</h2>
                <div className="recent-list">
                    {questions.slice(-2).map((q) => (
                        <div key={q.id} className="question-card text-[var(--black)]">
                            <p className="question-title text-[var(--black)]">{q.question}</p>
                            <div className="tags">
                                <span className="tag blue">{q.technology}</span>
                                <span className={`tag ${q.status === "Active" ? "status-active" : "status-inactive"}`}>
                                    {q.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default SecondSetCards