import React , { Component } from "react";
import Header from '../Atoms/Header';
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