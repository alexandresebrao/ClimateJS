import React from "react";
import logo from "./logo.svg";

const headerStyle = {
    height: 50,
    position: "fixed",
    width: "100%",
    backgroundColor: "white",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const imgStyle = {
    height: "50%"
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