import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';

import faviconImage from './assets/images/favicon.png';

import App from './components/app';

ReactDOM.render(
  <div>
    <Favicon url={faviconImage} />
    <App />
  </div>,
  document.getElementById('root')
);
