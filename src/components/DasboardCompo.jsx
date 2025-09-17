import React from "react";
import FirstCards from "./FirstSetOfCards";
import SecondSetCards from "./SecondSetOfCards";

const Contentpart = ({ technologies, technologie, question, users }) => {
    return (
        <div className="Dashboardcard Flex-column">
            <div>
                <FirstCards
                    techCount={technologies.length}
                    technologie={technologie}
                    questions={question}
                    QueCount={question.length}
                    UserCount={users.length}
                    User={users}
                    />
                <SecondSetCards
                    techList={technologies}
                    User={users}
                    questions={question} />
            </div>
        </div>
    )
}

export default Contentpart