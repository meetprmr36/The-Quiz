import React from "react";
import FirstCards from "./FirstSetOfCards";
import SecondSetCards from "./SecondSetOfCards";

const Contentpart = () => {
    return (
        <div className="Dashboardcard Flex-column">
            <FirstCards />
            <SecondSetCards />
        </div>
    )
}

export default Contentpart