import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";

const FirstCards = () => {
    return (
        <div className="Firstline Flex-column gap-4">
            <div className="Card Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
                <div className="Flex-Row Three-cards">
                    <div className="Icon">
                        <div className="card-blue">
                            <FaEarthAmericas />
                        </div>
                    </div>
                    <div className="Content-names">
                        <h2 className="font-semibold text-[var(--black)]">Technologies</h2>
                        <p className="text-[var(--lightGray)]">5</p>
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
                        <h2 className="font-semibold text-[var(--black)]">Questions</h2>
                        <p className="text-[var(--lightGray)]">12</p>
                    </div>
                </div>
            </div>

            <div className="Card Flex-column Card-shadow bg-[var(--white)] text-[var(--black)]">
                <div className="Flex-Row Three-cards">
                    <div className="Icon">
                        <div className="card-purple">
                            <HiTrendingUp />
                        </div>
                    </div>
                    <div className="Content-names">
                        <h2 className="font-semibold text-[var(--black)]">Trends</h2>
                        <p className="text-[var(--lightGray)]">8</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FirstCards