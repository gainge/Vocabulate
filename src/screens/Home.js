import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'

import { connect } from 'react-redux'

import Page from '../components/Page'

class HomeScreen extends Component {
  render() {
    return (
      <Page>
        <Text> Home bb </Text>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = {
  
}

let HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

export default class Home extends Component {
  render() {
    return (
      <HomeContainer navigation={this.props.navigation} />
    )
  }
}
