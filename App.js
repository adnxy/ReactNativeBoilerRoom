import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/config/store';

import Router from './src/config/router';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Router />
     </Provider>
    );
  }
}

