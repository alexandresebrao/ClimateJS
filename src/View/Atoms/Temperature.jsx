import React from "react";

const Temperature = function(props) {
    return (<span>{parseInt(props.children, 10)}º</span>);
};

export default Temperature;