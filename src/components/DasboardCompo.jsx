import React from "react";
import FirstCards from "./FirstSetOfCards";
import SecondSetCards from "./SecondSetOfCards";

const Contentpart = ({ technologies, question,users }) => {
    console.log(technologies)
    return (
        <div className="Dashboardcard Flex-column">
            <div>
            <FirstCards
                techCount={technologies.length}
                QueCount={question.length} 
                UserCount={users.length}
                />
            <SecondSetCards
                techList={technologies}
                questions={question} />
            </div>
        </div>
    )
}

export default Contentpart