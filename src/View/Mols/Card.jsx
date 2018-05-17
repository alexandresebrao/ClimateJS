import React, { Component } from "react";
import FooterCard from "climatejs/View/Atoms/FooterCard";

const wrapperStyle = {
    boxShadow: "0 0 10px rgba(51, 51, 51, 0.1)",
    height: 150,
    width: 300,
    backgroundColor: "white",
    position: "relative"
};



const temperatureSize = {
    height: "300"
};

const dividerStyle = {
  color: "#EBEBEB"
};

class Card extends Component {
    render() {
        return (
            <div style={wrapperStyle}>
                <div>Cabeçalho</div>
                <hr style={dividerStyle} />
                <div style={temperatureSize}>Temperatura</div>
                <FooterCard time={"000000"} />
            </div>
        );
    }
}

export default Card;