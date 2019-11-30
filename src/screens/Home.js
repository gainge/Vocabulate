import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'


import ListContainer from './../components/ListContainer'

// Load app data
import { appData } from './../util/DataLoader';
import GibFAB from '../components/GibFAB';
import Page from '../components/Page';

export default class Home extends Component {
  render() {
    return (
      <Page>
        <ListContainer lists={[ appData, ]} />
        <GibFAB />
      </Page>
    )
  }
}
