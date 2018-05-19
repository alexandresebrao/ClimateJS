import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import FooterCard from "../../../src/View/Mols/FooterCard";
import Loading from "../../../src/View/Atoms/Loading";
import Updated from "../../../src/View/Atoms/Updated";
import ContentLabel from "../../../src/View/Mols/ContentLabel";

// time: PropTypes.number,
//     loading: PropTypes.bool,
//     extra: PropTypes.bool,
//     humidity: PropTypes.number,
//     pressure: PropTypes.number

describe("ContentLabel tests", function() {
    let wrapper;

    before(function() {
        wrapper = shallow(<FooterCard label={"labeltest"} value={1} metric={"%"}/>);
    });

    after(function() {
        wrapper.unmount();
    });

    it("should render", function() {
        expect(wrapper).to.have.length(1);
    });

    it("should always render an updated component", function() {
       expect(wrapper.find(Updated)).to.have.length(1);
    });

    it("shouldnt render ContentLabel if no extra props", function() {
        expect(wrapper.find(ContentLabel)).to.have.length(0);
    });

    it("should render 2 ContentLabels components when it has extra prop", function() {
        wrapper.setProps({extra: true});
        expect(wrapper.find(ContentLabel)).to.have.length(2);
    });

    it("should render a loading component when its waiting for data", function() {
        wrapper.setProps({loading: true});

        expect(wrapper.find(Loading)).to.have.length(1);
    });
});

