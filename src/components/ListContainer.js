import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './ListItem'



export default class ListContainer extends Component {
  _keyExtractor = (item, index) => {
    return `${item.id}-${index}-${item.title}`;
  }

  _onSelect = (itemIndex) => {
    if (this.props.onSelect) {
      this.props.onSelect(itemIndex);
    }
  }

  _renderItem = (item) => {
    return <ListItem list={item.item} onSelect={() => this._onSelect(item.index)} />
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
