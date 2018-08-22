import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import Favicon from 'react-favicon';
import faviconImage from './assets/images/favicon.png';

import StoreInitializer from './stores';

import App from './components/app';

ReactDOM.render(
  <div>
    <Favicon url={faviconImage} />

    <Provider {...StoreInitializer.initialize()}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);
