import React, { Component } from "react";

class Temperature extends Component {
    getColor(temperature) {
        if (temperature <= 5) {
            return "#63A3FF";
        }

        if (temperature <= 25) {
            return "#FF9632";
        }

        return "#ED1946";
    }

    render() {
        const temperature = parseInt(this.props.children, 10), style = {color: this.getColor(temperature)};

        return (
            <div style={style}>{temperature + "º"}</div>
        );
    }
}

export default Temperature;