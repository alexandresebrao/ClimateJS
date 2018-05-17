import React, { Component } from "react";
import FooterCard from "../Atoms/FooterCard";
import WeatherController from "../../Connector/WeatherController";
import PropTypes from "prop-types";
import Temperature from "../Atoms/Temperature";
import formatCityName from "../../Helpers/formatCityName";

const wrapperStyle = {
    boxShadow: "0 0 10px rgba(51, 51, 51, 0.1)",
    width: 300,
    backgroundColor: "white",
    position: "relative"
};

const headerStyle = {
    textAlign: "center",
    width: "100%"
};

const temperatureStyle = {
    height: 140,
    textAlign: "center",
    fontSize: 72,
    verticalAlign: "middle"
};

const dividerStyle = {
  color: "#EBEBEB"
};

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, main: null};
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        new WeatherController(this.props.city, this.updateData);
    }

    updateData(value) {
        this.setState({main: value, loading: false});
    }

    getTemperature() {
        if (this.state.loading) {
            return "Carregando...";
        }

        return (<Temperature>{this.state.main.temp}</Temperature>)
    }

    render() {
        return (
            <div style={wrapperStyle}>
                <div style={headerStyle}>{formatCityName(this.props.city)}</div>
                <hr style={dividerStyle} />
                <div style={temperatureStyle}>{this.getTemperature()}</div>
                <FooterCard time={this.state.main ? this.state.main.lastUpdate : null} />
            </div>
        );
    }
};

Card.propTypes = {
    city: PropTypes.string.isRequired
};

export default Card;