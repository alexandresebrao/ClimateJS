import React, { Component } from "react";
import Card from "climatejs/View/Mols/Card";

var bodyStyle = {
    backgroundColor: "#F1F1F1",
    height: 700,
    paddingTop: 50, // compensa a barra fixa no topo
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {cities: ["Nuuk,gl", "Urubici,br", "Nairobi,ke"]};
        this.getCards = this.getCards.bind(this);
    }

    getCards() {
        var i, cities = this.state.cities, cards = [];

        for (i = 0; i < cities.length; i++) {
            cards.push(<Card key={i} city={cities[i]} />)
        }

        return cards;
    }

    render() {
        return (
            <div style={bodyStyle}>
                {this.getCards()}
            </div>
        );
    }
};

export default Main;