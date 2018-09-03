import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import SampleStore from '../stores/sample-store';

import './app.scss';

@inject('sampleStore')
@observer
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      greet: ''
    };
  }

  async componentDidMount() {
    try {
      const { sampleStore } = this.props;
      const response = await fetch('/api/greet');

      if (response.status !== 200) throw new Error('Error on API call');

      this.setState({
        greet: await response.text()
      });

      setInterval(() => sampleStore.tick(), 1000);
    } catch ({ message }) {
      console.log(message); //eslint-disable-line
    }
  }

  render() {
    const { greet } = this.state;
    const { sampleStore } = this.props;

    return (
      <div>
        <h1>
          React / Node.js - {greet} - {sampleStore.counter}
        </h1>
        <h2>Boilerplate </h2>
      </div>
    );
  }
}

App.propTypes = {
  sampleStore: PropTypes.instanceOf(SampleStore)
};

export default App;
