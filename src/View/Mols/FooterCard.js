import React, { Component } from "react";
import PropTypes from "prop-types";
import Updated from "../Atoms/Updated";
import Loading from "../Atoms/Loading";
import ContentLabel from "./ContentLabel";

const footerStyle = {
    backgroundColor: "rgba(241,241,241, 0.5)",
    width: "100%",
    padding: 8,
    textAlign: "center",
    color: "#B4B4B4"
};

const extraComponentStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: 5
};

class FooterCard extends Component {
    getView() {
        if (this.props.loading) {
            return (<Loading />);
        }

        return (<Updated time={this.props.time} />);
    }

    getExtra() {
        if (this.props.extra) {
            return (
                <div style={extraComponentStyle}>
                    <ContentLabel
                        value={parseInt(this.props.humidity, 10)}
                        metric={"%"}
                        label={"Humidity"}/>
                    <ContentLabel
                        value={parseInt(this.props.pressure, 10)}
                        metric={"hPa"}
                        label={"Pressure"}/>
                </div>
            );
        }

        return null;
    }

    render() {
        return (
            <div style={footerStyle}>
                {this.getExtra()}
                {this.getView()}
            </div>
        );
    };
};

FooterCard.propTypes = {
    time: PropTypes.number,
    loading: PropTypes.bool,
    extra: PropTypes.bool,
    humidity: PropTypes.number,
    pressure: PropTypes.number
};

export default FooterCard;