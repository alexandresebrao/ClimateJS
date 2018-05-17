import React, {Component} from "react";
import Connector from "../../Connector/OpenWeatherMap";
import PropTypes from "prop-types";
import Temperature from "./Temperature";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, main: null};

    }

    componentDidMount() {
        var that = this;

        Connector.getInfoFromCity(that.props.city)
            .then(function(response) {
                that.setState({main: response.data.main, loading: false});
            });
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