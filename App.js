/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './app/redux/store'
import Tabs from './app/config/routes';
import { connectSocket } from './app/config/socket';


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    );
  }
}


