import React from "react";
import Loading from "../../../src/View/Atoms/Loading";
import { shallow } from "enzyme";
import { expect } from "chai";

describe("Loading rendering test", function() {
    let wrapper;

    before(function() {
        wrapper = shallow(<Loading />);
    });

    after(function() {
        wrapper.unmount();
    });

    it("should render", function() {
        expect(wrapper).to.have.length(1);
    });

    it("should render img element", function() {
        expect(wrapper.find("img")).to.have.length(1);
    });
});