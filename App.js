/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux'
import makeStore from './app/redux/store'
import Tabs from './app/config/routes';
import { setIsConnected } from './app/redux/home/actions';
import Home from './app/screens/Home';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      store: null,
      isLoaded: false
    };
  };
  async loadStore() {
    const store = await makeStore()
    this.setState({ store, isLoaded: true }, this.testConnect)

  }
  testConnect = () => {
    setInterval(() => {
      fetch("https://httpbin.org/ip")
        .then(response => response.json())
        .then(responseJson => {
          // Internet is available, set timeout to suspend sync after 10 seconds
          this.state.store.dispatch(setIsConnected(isConnected = true))

          console.log('Conectou')
        }).catch(err => {
          this.state.store.dispatch(setIsConnected(isConnected = false))

          // No internet, skip sync
          console.log('Não conectou')
        })
    }, 10000)
  }
  componentDidMount() {

    this.loadStore()

  }
  render() {
    if (this.state.isLoaded) {
      return (
        <Provider store={this.state.store}>
          <Home/>
        </Provider>
      );
    } else {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#green" />
        </View>
      );
    }
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

