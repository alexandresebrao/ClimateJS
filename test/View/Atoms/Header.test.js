import React from "react";
import Header from "../../../src/View/Atoms/Header";
import { shallow } from "enzyme";
import { expect } from "chai";

describe("Header rendering test", function() {
    let wrapper;

    before(function() {
        wrapper = shallow(<Header />);
    });

    after(function() {
        wrapper.unmount();
    });

    it("should render", function() {
        expect(wrapper).to.have.length(1);
    });

    it("should render an img element", function() {
        expect(wrapper.find("img")).to.have.length(1);
    });
});