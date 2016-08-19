import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Main from '../src/containers/Main';

describe("<Main />", function() {
  it("Should have a div container with id: 'container'", function() {
    expect(shallow(<Main />).find('div#container').length).to.equal(1);
  });

  it("Should have an H1 title", function() {
    expect(shallow(<Main />).find('h1').text()).to.equal('Interactive Labs');
  });
});
