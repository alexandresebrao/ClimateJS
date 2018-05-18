import React, { Component } from "react";
import PropTypes from "prop-types";
import Updated from "../Atoms/Updated";
import Loading from "../Atoms/Loading";

const footerStyle = {
    backgroundColor: "rgba(241,241,241, 0.5)",
    width: "100%",
    padding: 8,
    textAlign: "center",
    color: "#B4B4B4"
};

class FooterCard extends Component {
    getView() {
        if (this.props.loading) {
            return (<Loading />);
        }

        return (<Updated time={this.props.time} />);
    }

    render() {
        return (
            <div style={footerStyle}>
                {this.getView()}
            </div>
        );
    };
};

FooterCard.propTypes = {
  time: PropTypes.number,
  loading: PropTypes.bool
};

export default FooterCard;