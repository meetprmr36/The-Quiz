import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";

const FirstCards = () => {
    return (
        <div className="Firstline Flex-column">
            <div className="Card Flex-column Card-shadow">
                <div className="Flex-Row Three-cards">
                    <div className="Icon ">
                        <div className="card-blue">
                            <span >
                                <FaEarthAmericas />
                            </span>
                        </div>
                    </div>
                    <div className="Content-names">
                        <h2>Technologies</h2>
                        <p>5</p>
                    </div>
                </div>
            </div>
            <div className="Card Flex-column Card-shadow">
                <div className="Flex-Row Three-cards">
                    <div className="Icon">
                        <div className="card-green">
                            <span>
                                <FaQuestion />
                            </span>
                        </div>
                    </div>
                    <div className="Content-names">
                        <h2>Technologies</h2>
                        <p>5</p>
                    </div>
                </div></div>
            <div className="Card Flex-column Card-shadow">
                <div className="Flex-Row Three-cards">
                    <div className="Icon">
                        <div className="card-purple">
                            <span>
                                <HiTrendingUp />
                            </span>
                        </div>
                    </div>
                    <div className="Content-names">
                        <h2>Technologies</h2>
                        <p>5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstCards