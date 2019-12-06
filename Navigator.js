import React, { Component } from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import AppStyles from './src/styles/AppStyles'

import Home from './src/screens/Home'


const AppNavigator = createStackNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: AppStyles.color.primary,
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: AppStyles.color.textLight,
      },
    },
    headerLayoutPreset: 'center'
  }
);

const AppContainer = createAppContainer(AppNavigator);

class Navigator extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

export default Navigator;
