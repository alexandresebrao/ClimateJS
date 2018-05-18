import React from "react";
import Main from "../../../src/View/Orgs/Main";
import Card from "../../../src/View/Mols/Card";
import { shallow } from "enzyme";
import { expect } from "chai";

describe("Main rendering test", function() {
    let wrapper;

    before(function() {
        wrapper = shallow(<Main />);
    });

    after(function() {
        wrapper.unmount();
    });

    it("should render", function() {
        expect(wrapper).to.have.length(1);
    });

    it("should render three card elements", function() {
        expect(wrapper.find(Card)).to.have.length(3);
    });
});