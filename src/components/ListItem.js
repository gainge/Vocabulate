
import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { Icon, Tooltip } from 'react-native-elements';

import List from '../model/List';

import ListDataDisplay from './ListDataDisplay'

export default class ListItem extends Component {


  _onMenuPress = () => {

  }

  render() {
    return (
      <View style={[styles.itemContainer, this.props.style]}>
        <View style={styles.iconContainer}>
          <Icon
            name="dots-vertical"
            type="material-community"
            size={25}
            onPress={this._onMenuPress}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.3}
          style={styles.dataContainer}
          onPress={this.props.onSelect}
        >
          {this.props.content}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    flexDirection: 'row'
  },
  iconContainer: {
    alignSelf: 'center',
  },
  dataContainer: {
    flex: 1,
    marginLeft: 10,
  },
})



ListItem.propTypes = {
  // list: PropTypes.instanceOf(List)
}


