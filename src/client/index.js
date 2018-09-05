import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import Favicon from 'react-favicon';
import faviconImage from './assets/images/favicon.png';

import StoreInitializer from './stores';

import App from './components/app';

ReactDOM.render(
  <div>
    <Favicon url={faviconImage} />

    <Provider {...StoreInitializer.initialize()}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>,
  document.getElementById('root')
);
