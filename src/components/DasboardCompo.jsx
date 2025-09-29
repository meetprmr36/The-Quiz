import React from "react";
import FirstCards from "./FirstSetOfCards";
import SecondSetCards from "./SecondSetOfCards";

const Contentpart = ({ technologie, question, users }) => {
    return (
        // <div className="Dashboardcard flex flex-col">
        //     <div>
        //         <FirstCards
        //             technologie={technologie}
        //             questions={question}
        //             User={users}
        //             />
        //         <SecondSetCards
        //             techList={technologie}
        //             User={users}
        //             questions={question}
        //             />
        //     </div>
        //  </div>

        <div className="h-full flex flex-col gap-4">
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
    )
}

export default Contentpart