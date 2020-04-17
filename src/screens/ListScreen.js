import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'

export default class ListScreen extends Component {
  constructor(props) {
    super(props);

    const listID = this.props.navigation.getParam('listID');
    const modelType = this.props.navigation.getParam('modelType');


    this.state = {
      listID: listID,
      modelType: modelType,
    }
  }

  render() {
    return (
      <View>
        <Text>[{this.state.modelType}] id: {this.state.listID}</Text>
      </View>
    )
  }
}
