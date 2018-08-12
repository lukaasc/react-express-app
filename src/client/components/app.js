import React from 'react';

import './app.scss';

export default class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      greet: ''
    };
  }

  async componentDidMount() {
    this.setState({
      greet: await Promise.resolve('App')
    });
  }

  render() {
    const { greet } = this.state;

    return (
      <div>
        <h1>React / Node.js - {greet}</h1>
        <h2>Boilerplate </h2>
      </div>
    );
  }
}
