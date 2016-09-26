import React from 'react';
import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';
import { mount } from 'enzyme';
import Main from '../src/containers/Main';
import Tour from '../src/containers/Tour';

import 'whatwg-fetch';
import sinon from 'sinon';

describe('<Main /> container', () => {
  const wrapper = mount(<Main />);
  let server;
  before(() => {
    console.log('BEFORE');
    server = sinon.fakeServer.create();
  });

  after(() => {
    server.restore();
  });

  describe('<h1> should be', () => {
    it('present', () => {
      expect(wrapper.containsMatchingElement(<h1>Heading here...</h1>)).to.equal(true);
      expect(wrapper.find('h1').length).to.equal(1);
    });
    it('should not be empty', () => {
      expect(wrapper.find('h1').text().length).to.above(0);
    });
  });

  it('Should contain a <Tour /> node', () => {
    expect(wrapper.contains(<Tour />)).to.equal(true);
  });
});
