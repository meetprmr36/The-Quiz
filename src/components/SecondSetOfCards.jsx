import React from "react";
const techList = [
    { name: "React.js", status: "Active" },
    { name: "Node.js", status: "Active" },
    { name: "Python", status: "Non Active" }
];

const questions = [
    {
        id: 1,
        title: "What is JSX in React?",
        tag: "React.js",
        status: "Active",
    },
    {
        id: 2,
        title: "Explain Node.js event loop",
        tag: "Node.js",
        status: "Active",
    },
];

const SecondSetCards = () => {
    return (
        <div className="secondline Flex-column gap-4">
            <div className="secondCard Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
                <h2 className="font-semibold text-[var(--black)]  mb-2">Recent Technology</h2>
                <div className="Inside-technology">
                    {techList.map((tech, idx) => (
                        <p key={idx} 
                        className="text-[var(--black)]">
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
                    {questions.map((q) => (
                        <div key={q.id} className="question-card text-[var(--black)]">
                            <p className="question-title text-[var(--black)]">{q.title}</p>
                            <div className="tags">
                                <span className="tag blue">{q.tag}</span>
                                <span className="tag green">{q.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default SecondSetCards