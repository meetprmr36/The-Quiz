import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const FirstCards = ({ techCount, QueCount,UserCount }) => {
    return (
        <div className="Firstline Flex-column">
            <div className="Card Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
                <div className="Flex-Row Three-cards">
                    <div className="Icon">
                        <div className="card-blue">
                            <FaEarthAmericas />
                        </div>
                    </div>
                    <div className="Content-names">
                        <h2 className="text-xl font-semibold text-[var(--black)]">Technologies</h2>
                        <p className="text-[var(--lightGray)]">{techCount}</p>
                    </div>
                </div>
            </div>

            <div className="Card Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
                <div className="Flex-Row Three-cards">
                    <div className="Icon">
                        <div className="card-green">
                            <FaQuestion />
                        </div>
                    </div>
                    <div className="Content-names">
                        <h2 className="text-xl font-semibold text-[var(--black)]">Questions</h2>
                        <p className="text-[var(--lightGray)]">{QueCount}</p>
                    </div>
                </div>
            </div>

            <div className="Card Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
                <div className="Flex-Row Three-cards">
                    <div className="Icon">
                        <div className="card-pink">
                            <FaUser />
                        </div>
                    </div>
                    <div className="Content-names">
                        <h2 className="text-xl font-semibold text-[var(--black)]">Users</h2> 
                        <p className="text-[var(--lightGray)]">{UserCount}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FirstCards