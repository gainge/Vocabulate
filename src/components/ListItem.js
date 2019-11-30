
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

import List from '../model/List';
import HorizontalRule from './HorizontalRule';


export default class ListItem extends Component {
  render() {
    let list = this.props.list;

    return (
      <View style={[styles.itemContainer, this.props.style ]}>
        <Text style={styles.titleWrapper}>
          <Text>Title: </Text>
          <Text style={styles.title}>{list.title}</Text>
        </Text>
        <HorizontalRule width={1.5} />
        <Text>Items: {list.items.length}</Text>
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
  },
  title: {
    fontStyle: 'italic',
  }
})


ListItem.propTypes = {
  list: PropTypes.instanceOf(List)
}


