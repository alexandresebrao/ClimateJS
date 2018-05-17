import React from "react";
import formatTime from "../../Helpers/formatTime";

const footerStyle = {
    backgroundColor: "#F1F1F1",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 8,
    textAlign: "center"
};

export default function(props) {
    return (
      <div style={footerStyle}>
          Updated at: {formatTime(props.time)}
      </div>
    );
};