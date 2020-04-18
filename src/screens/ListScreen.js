import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'

import ListContainer from '../components/ListContainer';
import Page from '../components/Page';

import { TOPICS, TOOLS, VOCAB } from '../util/Constants'

export default class ListScreen extends Component {
  constructor(props) {
    super(props);

    const list = this.props.navigation.getParam('list');
    const modelType = this.props.navigation.getParam('modelType');


    this.state = {
      list: list,
      modelType: modelType,
    }
  }

  _renderItem = (item) => {
    // This is where we need to reflect on the model type, yeah?
    switch (this.state.modelType) {
      case TOPICS:
        return <Text>It's a topic, I guess</Text>
      case TOOLS:
        return <Text>Got a tool for ya!</Text>
      case VOCAB:
        return <Text>Here's some vocab my guy</Text>
      default:
        return <Text>I have no idea what this is</Text>
    }
  }

  render() {
    return (
      <Page>
        {/* <Text>[{this.state.modelType}] title: {this.state.list.title}</Text> */}
        <ListContainer
          listData={this.state.list.items}
          renderItem={this._renderItem}
        />
      </Page>
    )
  }
}
