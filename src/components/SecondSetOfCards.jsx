// import React from "react";
// import { useEffect, useState } from "react";

// function SecondSetCards({ techList, questions, User }) {
//     return (
//         <div className="secondline Flex-column">
//             <div className="secondCard Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
//                 <h2 className="recent-title font-semibold text-[var(--black)]">Recent Users</h2>
//                 <div className="Inside-technology">
//                     {User.slice(-6).map((tech, idx) => {
//                         const percentage = ((tech.score / 15) * 100).toFixed(0);
//                         const [progress, setProgress] = useState(0);

//                         useEffect(() => {
//                             const timeout = setTimeout(() => {
//                                 setProgress(percentage);
//                             }, 50);
//                             return () => clearTimeout(timeout);
//                         }, [percentage]);

//                         return (
//                             <div key={idx} className="User-inside text-[var(--black)]">
//                                 <div className="UserName">
//                                     {tech.name}
//                                     <span className="tag blue">{`${percentage}%`}</span>
//                                 </div>
//                                 <div className="ProgressBar">
//                                     <div
//                                         className="ProgressFill"
//                                         style={{
//                                             width: `${progress}%`,
//                                             transition: "width 1s ease-in-out"
//                                         }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>

//             <div className="secondCard Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
//                 <h2 className="recent-title text-[var(--black)]">Recent Questions</h2>
//                 <div className="recent-list">
//                     {questions.slice(-4).map((q) => (
//                         <div key={q.id} className="question-card text-[var(--black)]">
//                             <p className="question-title text-[var(--black)]">{q.question}</p>
//                             <div className="tags">
//                                 <span className="tag blue">{q.technology}</span>
//                                 <span className={`tag ${q.status === "Active" ? "status-active" : "status-inactive"}`}>
//                                     {q.status}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>

//     );
// }

// export default SecondSetCards


// import React, { useEffect, useState } from "react";

// function ProgressUser({ name, score }) {
//     const percentage = ((score / 15) * 100).toFixed(0);
//     const [progress, setProgress] = useState(0);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setProgress(percentage);
//         }, 150);
//         return () => clearTimeout(timeout);
//     }, [percentage]);

//     return (
//         <div className="User-inside text-[var(--black)]">
//             <div className="UserName">
//                 {name}
//                 <span className="tag blue">{`${percentage}%`}</span>
//             </div>
//             <div className="ProgressBar">
//                 <div
//                     className="ProgressFill"
//                     style={{
//                         width: `${progress}%`,
//                         transition: "width 1s ease-in-out"
//                     }}
//                 ></div>
//             </div>
//         </div>
//     );
// }

// function SecondSetCards({ techList, questions, User }) {
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => setLoading(false), 700);
//         return () => clearTimeout(timer);
//     }, []);

//     if (loading) {
//         return (
//             <div className="secondline Flex-column">
//                 {[1, 2].map((i) => (
//                     <div
//                         key={i}
//                         className="secondCard Flex-column Card-shadow bg-[var(--white)] text-[var(--black)] p-4"
//                     >
//                         <div className="h-5 bg-gray-200 rounded w-32 mb-6 animate-pulse"></div>
//                         {[1, 2, 3, 4, 5, 6].map((j) => (
//                             <div key={j} className="mb-7">
//                                 <div className="h-4 bg-gray-300 rounded w-45 mb-2 animate-pulse"></div>
//                                 <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         );
//     }

//     return (
//         <div className="secondline Flex-column">
//             <div className="secondCard Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
//                 <h2 className="recent-title font-semibold text-[var(--black)]">
//                     Recent Users
//                 </h2>
//                 <div className="Inside-technology">
//                     {User.slice(-6).map((u, idx) => (
//                         <ProgressUser key={idx} name={u.name} score={u.score} />
//                     ))}
//                 </div>
//             </div>


//             <div className="secondCard Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
//                 <h2 className="recent-title text-[var(--black)]">
//                     Recent Questions
//                 </h2>
//                 <div className="recent-list">
//                     {questions.slice(-4).map((q) => (
//                         <div key={q.id} className="question-card text-[var(--black)]">
//                             <p className="question-title text-[var(--black)]">
//                                 {q.question}
//                             </p>
//                             <div className="tags">
//                                 <span className="tag blue">{q.technology}</span>
//                                 <span
//                                     className={`tag ${
//                                         q.status === "Active"
//                                             ? "status-active"
//                                             : "status-inactive"
//                                     }`}
//                                 >
//                                     {q.status}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SecondSetCards;


import React, { useEffect, useState } from "react";

function ProgressUser({ name, score, delay }) {
    const percentage = ((score / 15) * 100).toFixed(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setProgress(percentage);
        }, delay);
        return () => clearTimeout(timeout);
    }, [percentage, delay]);

    return (
        <div className="User-inside text-[var(--black)]">
            <div className="UserName">
                {name}
                <span className="tag blue">{`${percentage}%`}</span>
            </div>
            <div className="ProgressBar">
                <div
                    className="ProgressFill"
                    style={{
                        width: `${progress}%`,
                        transition: "width 1s ease-in-out",
                    }}
                ></div>
            </div>
        </div>
    );
}

function SecondSetCards({ techList, questions, User }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 700);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="secondline Flex-column">
                {[1, 2].map((i) => (
                    <div
                        key={i}
                        className="secondCard Flex-column Card-shadow bg-[var(--white)] text-[var(--black)] p-4"
                    >
                        <div className="h-5 bg-gray-200 rounded w-32 mb-6 animate-pulse"></div>
                        {[1, 2, 3, 4, 5, 6].map((j) => (
                            <div key={j} className="mb-7">
                                <div className="h-4 bg-gray-300 rounded w-45 mb-2 animate-pulse"></div>
                                <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    return (
        // <div className="secondline Flex-column my-3">
        //     <div className="secondCard Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
        //         <h2 className="recent-title font-semibold text-[var(--black)]">
        //             Recent Users
        //         </h2>
        //         <div className="Inside-technology">
        //             {User.slice(-6).map((u, idx) => (
        //                 <ProgressUser
        //                     key={idx}
        //                     name={u.name}
        //                     score={u.score}
        //                     delay={idx * 50}
        //                 />
        //             ))}
        //         </div>
        //     </div>

        //     <div className="secondCard Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
        //         <h2 className="recent-title text-[var(--black)]">Recent Questions</h2>
        //         <div className="recent-list">
        //             {questions.slice(-4).map((q) => (
        //                 <div key={q.id} className="question-card text-[var(--black)]">
        //                     <p className="question-title text-[var(--black)]">
        //                         {q.question}
        //                     </p>
        //                     <div className="tags">
        //                         <span className="tag blue">{q.technology}</span>
        //                         <span
        //                             className={`tag ${q.status === "Active"
        //                                     ? "status-active"
        //                                     : "status-inactive"
        //                                 }`}
        //                         >
        //                             {q.status}
        //                         </span>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full my-3">
            <div className="bg-[var(--white)] text-[var(--black)] rounded-xl shadow-md p-5 flex flex-col">
                <h2 className="text-lg font-semibold text-[var(--black)] mb-4">
                    Recent Users
                </h2>
                <div className="flex-1 flex flex-col gap-4">
                    {User.slice(-6).map((u, idx) => (
                        <ProgressUser
                            key={idx}
                            name={u.name}
                            score={u.score}
                            delay={idx * 50}
                        />
                    ))}
                </div>
            </div>

            <div className="bg-[var(--white)] text-[var(--black)] rounded-xl shadow-md p-5 flex flex-col">
                <h2 className="text-lg font-semibold text-[var(--black)] mb-4">
                    Recent Questions
                </h2>
                <div className="flex flex-col gap-4">
                    {questions.slice(-4).map((q) => (
                        <div
                            key={q.id}
                            className="p-2 rounded-xl bg-[var(--gray)] shadow-sm"
                        >
                            <p className="font-medium text-[var(--black)] mb-2">
                                {q.question}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="tag blue">{q.technology}</span>
                                <span
                                    className={`tag ${q.status === "Active" ? "status-active" : "status-inactive"
                                        }`}
                                >
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

export default SecondSetCards;
