import React from "react";
import logo from "./logo.svg";

const headerStyle = {
    textAlign: "center",
    height: 50,
    position: "fixed",
    width: "100%",
    backgroundColor: "white"
};

const imgStyle = {
    height: "100%"
};

const header = function() {
    return (
        <div style={headerStyle}>
            <img
                src={logo}
                style={imgStyle}
                alt={"Weather Now"} />
        </div>
    );
};

export default header;