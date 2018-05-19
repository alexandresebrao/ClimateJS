import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Label from "../../../src/View/Atoms/Label";
import Info from "../../../src/View/Atoms/Info";
import ContentLabel from "../../../src/View/Mols/ContentLabel";

describe("ContentLabel tests", function() {
    let wrapper;

    before(function() {
        wrapper = shallow(<ContentLabel label={"labeltest"} value={1} metric={"%"}/>);
    });

    after(function() {
        wrapper.unmount();
    });

    it("should render", function() {
        expect(wrapper).to.have.length(1);
    });

    it("should render a Label component", function() {
       expect(wrapper.find(Label)).to.have.length(1);
       expect(wrapper.find(Label).dive().text()).to.equal("LABELTEST");
    });

    it("should render info component", function() {
        expect(wrapper.find(Info)).to.have.length(1);
        expect(wrapper.find(Info).dive().text()).to.equal("1%");
    });
});

