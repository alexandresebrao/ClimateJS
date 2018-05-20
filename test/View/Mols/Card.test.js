import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import Card from "../../../src/View/Mols/Card";
import Temperature from "../../../src/View/Atoms/Temperature";
import Updated from "../../../src/View/Atoms/Updated";
import Info from "../../../src/View/Atoms/Info";

describe("Card tests", function() {
    let wrapper;

    before(function() {
        wrapper = mount(<Card city={"Teste,tl"} />);
    });

    after(function() {
        wrapper.unmount();
    });

    it ("should render", function() {
        expect(wrapper.find(Card)).to.have.length(1);
    });

    it ("should Temperature && Updated and not Info", function() {
        expect(wrapper.find(Temperature)).to.have.length(1);
        expect(wrapper.find(Updated)).to.have.length(1);
        expect(wrapper.find(Info)).to.have.length(0);
    });

    it("should render info when it has the prop on", function() {
        wrapper.setState({
            main: {
                temp: 10,
                humidity: 15,
                pressure: 20
            }
        });

        wrapper.setProps({extra: true});

        expect(wrapper.find(Temperature)).to.have.length(1);
        expect(wrapper.find(Updated)).to.have.length(1);
        expect(wrapper.find(Info)).to.have.length(2);
    });
});