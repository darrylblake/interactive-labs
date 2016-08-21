import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow, mount, render } from 'enzyme';
import Main from '../src/containers/Main';
import Tour from '../src/containers/Tour';

describe('<Main /> container', function() {
  const wrapper = mount(<Main />);

  it("Should have a div container with id: 'container'", () => {
    expect(wrapper.find('div#container').length).to.equal(1);
  });

  describe('<h1> should be', () => {
    it('present', () => {
      expect(wrapper.containsMatchingElement(<h1>Heading here...</h1>)) .to.equal(true);
      // expect(wrapper.find('h1').length) .to.equal(1);
    });
    it('should not be empty', () => {
      expect(wrapper.find('h1').text().length).to.above(0);
    });
  });

  it('Should contain a <Tour /> node', () => {
    expect(wrapper.contains(<Tour />)).to.equal(true);
  });
});
