import React , { Component } from "react";
import Header from 'climatejs/View/Mols/Header';
import Main from 'climatejs/View/Mols/Main';
import "./App.css";

class Body extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
};

export default Body;