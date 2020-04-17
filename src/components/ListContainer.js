import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import GibFAB from './GibFAB'



export default class ListContainer extends Component {
  _keyExtractor = (item, index) => {
    return `${item.id}-${index}`;
  }

  _onSelect = (itemIndex) => {
    if (this.props.onSelect) {
      this.props.onSelect(itemIndex);
    }
  }

  _onAddItem = () => {
    if (this.props.onAddItem) {
      this.props.onAddItem();
    }
  }

  _renderItem = (item) => {
    return <ListItem list={item.item} onSelect={() => this._onSelect(item.index)} />
  }

  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <FlatList
          data={this.props.listData}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
        <GibFAB
          style={[this.props.FABStyle]}
          onPress={() => this._onAddItem()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

ListContainer.propTypes = {
  listData: PropTypes.array.isRequired,
}

