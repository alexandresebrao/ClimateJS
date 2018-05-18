import React from "react";
import Temperature from "../../../src/View/Atoms/Temperature";
import { shallow } from "enzyme";
import { expect } from "chai";

describe("Temperature rendering test", function() {
    let wrapper;

    before(function() {
        wrapper = shallow(<Temperature>{0}</Temperature>);
    });

    after(function() {
        wrapper.unmount();
    });

    it("should render", function() {
        expect(wrapper).to.have.length(1);
    });

    it("should render blue color when is less or equals 5", function() {
        expect(wrapper.find("div").props().style.color).to.equal("#63A3FF");

        wrapper.setProps({children: 5});

        expect(wrapper.find("div").props().style.color).to.equal("#63A3FF");
    });

    it("should render orange color when is less or equals 25", function() {
        wrapper.setProps({children: 15});

        expect(wrapper.find("div").props().style.color).to.equal("#FF9632");

        wrapper.setProps({children: 25});

        expect(wrapper.find("div").props().style.color).to.equal("#FF9632");
    });

    it("should render red color when is greater than 25", function() {
        wrapper.setProps({children: 26});

        expect(wrapper.find("div").props().style.color).to.equal("#ED1946");

        wrapper.setProps({children: 50});

        expect(wrapper.find("div").props().style.color).to.equal("#ED1946");
    });
});