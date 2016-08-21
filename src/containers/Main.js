import React, { Component } from 'react';
import Tour from './Tour'

export default class Main extends Component {
  render() {
    return (
      <div id="container">
        <h1>Heading here...</h1>
        <h2>Heading here...</h2>
        <Tour />
        {this.props.children}
      </div>
    );
  }
}
