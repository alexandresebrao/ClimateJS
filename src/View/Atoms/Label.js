import React from "react";

const labelStyle = {
    fontSize: 12
};

export default function(props) {
    return (<div style={labelStyle}>{props.children.toUpperCase()}</div>);
};