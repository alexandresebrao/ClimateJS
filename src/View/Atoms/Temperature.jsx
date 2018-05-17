import React, { Component } from "react";

class Temperature extends Component {
    getColor() {
        const temperature = this.props.children;

        if (temperature <= 5) {
            return "#63A3FF";
        }

        if (temperature <= 25) {
            return "#FF9632";
        }

        return "#ED1946";
    }

    render() {
        const style = {color: this.getColor()}, temperature = this.props.children;

        return (
            <div style={style}>{parseInt(temperature, 10)}º</div>
        );
    }
}

export default Temperature;