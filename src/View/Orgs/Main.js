import React, { Component } from "react";
import Card from "../Mols/Card";
import "./Main.css"
import appConfig from "../../config";

const bodyStyle = {
    backgroundColor: "#F1F1F1",
    minHeight: 600,
    height: "100%",
    paddingTop: 75, // compensa a barra fixa no topo
    display: "flex"
};

class Main extends Component {
    getCards() {
        const cities = appConfig.cities, extraCities = appConfig.showExtra;

        let cards;

        cards = cities.map((city, index) => (<Card key={index} city={city} extra={extraCities.indexOf(city) > -1}/>));

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