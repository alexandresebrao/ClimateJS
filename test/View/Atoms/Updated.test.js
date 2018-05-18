import React from "react";
import Updated from "../../../src/View/Atoms/Updated";
import { shallow } from "enzyme";
import { expect } from "chai";

describe("Loading rendering test", function() {
    let wrapper;

    before(function() {
        wrapper = shallow(<Updated time={1526657472324} />);
    });

    after(function() {
        wrapper.unmount();
    });

    it("should render", function() {
        expect(wrapper).to.have.length(1);
    });

    it("should render img element", function() {
        expect(wrapper.find("div").text()).to.equal("Updated at 12:31:12 PM");
    });
});