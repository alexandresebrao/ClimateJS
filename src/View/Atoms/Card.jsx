import React, {Component} from "react";
import WeatherController from "../../Connector/WeatherController";
import PropTypes from "prop-types";
import Temperature from "./Temperature";

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
        console.log(value);
        this.setState({main: value, loading: false});
    }

    render() {
        if (this.state.loading) {
            return (<span>Carregando...</span>)
        }

        return (<Temperature>{this.state.main.temp}</Temperature>)
    }
};

Card.propTypes = {
    city: PropTypes.string.isRequired
};

export default Card;