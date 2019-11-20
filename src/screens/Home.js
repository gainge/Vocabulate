import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'


import ListContainer from './../components/ListContainer'

// Load app data
import { appData } from './../util/DataLoader';

export default class Home extends Component {
  render() {
    return (
      <View>
        <ListContainer lists={[ appData, ]} />
      </View>
    )
  }
}
