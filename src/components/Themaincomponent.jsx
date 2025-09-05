import React from "react";
import Thesidebar from "./Thesidebar";
import Thecontentpart from "./Thecontentpart";
import "../index.css"
import "../App.css"

const Themaincomponent = () => {
    return (
        <div className="maincomponent">
            <Thesidebar />
            <Thecontentpart />
        </div>
    )
}

export default Themaincomponent;