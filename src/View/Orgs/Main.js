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
        const cards = [], cities = appConfig.cities, extraCities = appConfig.showExtra;

        let i, city;

        for (i = 0; i < cities.length; i++) {
            city = cities[i];
            cards.push(<Card key={i} city={city} extra={extraCities.indexOf(city) > -1}/>);
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