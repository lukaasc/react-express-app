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
    try {
      const response = await fetch('/api/greet');

      if (response.status !== 200) throw new Error('Error on API call');

      this.setState({
        greet: await response.text()
      });
    } catch ({ message }) {
      console.log(message); //eslint-disable-line
    }
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
