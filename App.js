import React, { Component } from 'react';


import { createStore } from 'redux';
import { Provider } from 'react-redux'

import lingualApp from './src/store/Reducers'
import { appData } from './src/util/DataLoader';

import Navigator from './Navigator'

const initialState = {
  lists: [
    appData
  ]
} // It's beautiful, I love it

const store = createStore(lingualApp, initialState)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}




