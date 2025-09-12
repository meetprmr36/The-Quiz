import React from "react";

function SecondSetCards({ techList, questions }) {
    return (
        <div className="secondline Flex-column">
            <div className="secondCard Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
                <h2 className="recent-title font-semibold text-[var(--black)]">Recent Technology</h2>
                <div className="Inside-technology">
                    {techList.slice(-3).map((tech, idx) => (
                        <p key={idx} className="text-[var(--black)]">
                            {tech.name}{" "}
                            <span className={tech.status === "Active" ? "status-active" : "status-inactive"}>
                                {tech.status}
                            </span>
                        </p>
                    ))}
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