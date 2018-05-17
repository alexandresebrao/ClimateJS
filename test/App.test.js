import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import App from '../src/View/Orgs/App'

const wrapper = shallow(<App />);

describe('Climate App Tests', function() {
    it('should render', function() {
        expect(wrapper).to.have.length(1);
    });
});