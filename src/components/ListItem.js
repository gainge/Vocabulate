
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

import List from '../model/List';


export default class ListItem extends Component {
  render() {
    return (
      <View style={[styles.itemContainer, this.props.style ]}>
        <Text style={styles.titleWrapper}>
          <Text>Title: </Text>
          <Text style={styles.title}>{this.props.list.title}</Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
  },
  titleWrapper: {
    fontSize: 20,
    textDecorationLine: 'underline'
  },
  title: {
    fontStyle: 'italic',
  }
})


ListItem.propTypes = {
  list: PropTypes.instanceOf(List)
}


