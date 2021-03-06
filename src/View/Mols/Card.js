import React, { Component } from "react";
import FooterCard from "./FooterCard";
import WeatherController from "../../Connector/WeatherController";
import PropTypes from "prop-types";
import Temperature from "../Atoms/Temperature";
import formatCityName from "../../Helpers/formatCityName";
import Loading from "../Atoms/Loading";
import "./Card.css";

const wrapperStyle = {
    boxShadow: "3px 3px rgba(51, 51, 51, 0.1)",
    width: 250,
    minWidth: 150,
    backgroundColor: "white",
    position: "relative",
    maxHeight: "100%",
    borderRadius: 3
};

const headerStyle = {
    textAlign: "center",
    width: "100%",
    color: "#737C84",
    verticalAlign: "middle",
    padding: 8,
    fontSize: 18
};

const temperatureStyle = {
    display: "flex",
    height: 140,
    fontSize: 86,
    justifyContent: "center",
    alignItems: "center"
};

const dividerStyle = {
    backgroundColor: "#EBEBEB",
    margin:0,
    border: "none",
    height: 1
};

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, main: null};
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        let weatherData = new WeatherController(this.props.city, this.updateData);

        weatherData.getData();
    }

    updateData(value) {
        this.setState({main: value, loading: false});
    }

    getTemperature() {
        if (this.state.loading) {
            return (<Loading />);
        }

        return (<Temperature>{this.state.main.temp}</Temperature>)
    }

    getFooter() {
        const lastUpdated = this.state.main ? this.state.main.lastUpdate : null, weatherInfo = this.state.main;

        return (
            <FooterCard
                time={lastUpdated}
                loading={this.state.loading}
                extra={this.props.extra}
                pressure={weatherInfo ? weatherInfo.pressure : null}
                humidity={weatherInfo ? weatherInfo.humidity : null}
            />
        );
    }

    render() {
        const className = this.props.city.replace(",", "");

        return (
            <div className={"Card " + className} style={wrapperStyle}>
                <div style={headerStyle}>{formatCityName(this.props.city)}</div>
                <hr style={dividerStyle} />
                <div style={temperatureStyle}>{this.getTemperature()}</div>
                {this.getFooter()}
            </div>
        );
    }
};

Card.propTypes = {
    city: PropTypes.string.isRequired,
    extra: PropTypes.bool
};

export default Card;