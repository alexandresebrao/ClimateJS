import React from "react"
import formatTime from "../../Helpers/formatTime";

const textStyle = {
    fontSize: 12
};

export default function(props) {
    return (
        <div style={textStyle}>
            Updated at {formatTime(props.time)}
        </div>
    );
};