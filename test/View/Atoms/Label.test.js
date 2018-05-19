import React from "react";
import Label from "../../../src/View/Atoms/Label";
import { shallow } from "enzyme";
import { expect } from "chai";

describe("Label tests", function() {
    let wrapper;

    before(function() {
        wrapper = shallow(<Label>{"Teste"}</Label>);
    });

    after(function() {
        wrapper.unmount();
    });

    it("should render", function() {
        expect(wrapper).to.have.length(1);
    });

    it("should display TESTE as text in label", function() {
        expect(wrapper.text()).to.equals("TESTE");
    });
});