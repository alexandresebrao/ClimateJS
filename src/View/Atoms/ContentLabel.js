import React from "react";

const labelStyle = {
    fontSize: 12
};

const extraFieldStyle = {
    display: "flex",
    alignItems: "flex-end",
    lineHeight: 1,
    justifyContent: "center",
    color: "#737C84"
};

const valueStyle = {
    display: "inline-block",
    fontSize: 20,
};

const metricStyle = {
    display: "inline-block",
    fontSize: 13
};

export default function(props) {
    return (
        <div>
            <div style={labelStyle}>{props.label.toUpperCase()}</div>
            <div style={extraFieldStyle}>
                <div style={valueStyle}>{props.value}</div>
                <div style={metricStyle}>{props.metric}</div>
            </div>
        </div>
    )
};