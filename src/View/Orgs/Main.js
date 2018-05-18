import React, { Component } from "react";
import Card from "../Mols/Card";
import "./Main.css"
import appConfig from "../../config";

var bodyStyle = {
    backgroundColor: "#F1F1F1",
    height: 700,
    paddingTop: 50, // compensa a barra fixa no topo
    display: "flex"
};

class Main extends Component {
    getCards() {
        const cards = [], cities = appConfig.cities;

        let i;

        for (i = 0; i < cities.length; i++) {
            cards.push(<Card key={i} city={cities[i]}/>);
        }

        return cards;
    }

    render() {
        return (
            <div className={"Body"} style={bodyStyle}>
                {this.getCards()}
            </div>
        );
    }
};

export default Main;