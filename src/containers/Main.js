import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div id="container">
        <h1>Interactive Labs</h1>
        {this.props.children}
      </div>
    );
  }
}
