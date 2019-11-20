import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './ListItem'



export default class ListContainer extends Component {
  _keyExtractor = (item, index) => {
    return `${item.id}-${index}-${item.title}`;
  }

  _renderItem = (item, index) => {
    return <ListItem list={item.item} />
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.lists}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  }
}

ListContainer.propTypes = {
  lists: PropTypes.array.isRequired,
}
