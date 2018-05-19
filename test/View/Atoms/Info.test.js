import React from "react";
import Info from "../../../src/View/Atoms/Info";
import { shallow } from "enzyme";
import { expect } from "chai";

describe("Info tests", function() {
    let wrapper;

    before(function() {
        wrapper = shallow(<Info value={12} metric={"test"} />);
    });

    after(function() {
        wrapper.unmount();
    });

    it("should render", function() {
        expect(wrapper).to.have.length(1);
    });

    it("should have the text in div as 12test", function() {
       expect(wrapper.text()).to.equals("12test");
    });
});