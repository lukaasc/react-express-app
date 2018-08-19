import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import Favicon from 'react-favicon';
import faviconImage from './assets/images/favicon.png';

import App from './components/app';
import SampleStore from './stores/sample-store';

const sampleStore = new SampleStore();

ReactDOM.render(
  <div>
    <Favicon url={faviconImage} />

    <Provider sampleStore={sampleStore}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);
