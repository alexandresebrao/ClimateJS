import React, { Component } from "react";

class Temperature extends Component {
    getColor() {
        const temperature = this.props.children;

        if (temperature <= 5) {
            return "blue";
        }

        if (temperature <= 25) {
            return "orange";
        }

        return "red";
    }

    render() {
        const style = {color: this.getColor()}, temperature = this.props.children;

        return (
            <span style={style}>{parseInt(temperature, 10)}º</span>
        );
    }
}

export default Temperature;