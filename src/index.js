import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import Router from 'react-router-dom/Router';

console.log(Provider, ConnectedRouter)
render(
  <Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
