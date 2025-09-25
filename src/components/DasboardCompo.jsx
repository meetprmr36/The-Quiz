import React from "react";
import FirstCards from "./FirstSetOfCards";
import SecondSetCards from "./SecondSetOfCards";

// const Contentpart = ({ technologies, technologie, question, users }) => {
const Contentpart = ({ technologie, question, users }) => {
    return (
        <div className="Dashboardcard Flex-column">
            <div>
                <FirstCards
                    technologie={technologie}
                    questions={question}
                    User={users}
                    />
                <SecondSetCards
                    techList={technologie}
                    User={users}
                    questions={question}
                    />
            </div>
        </div>
    )
}

export default Contentpart