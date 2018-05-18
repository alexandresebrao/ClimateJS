import React , { Component } from "react";
import Header from '../Mols/Header';
import Main from './Main';
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