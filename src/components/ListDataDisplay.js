import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import HorizontalRule from './HorizontalRule';

const ListDataDisplay = (props) => {
  return (
    <View style={[props.style]}>
      <Text style={styles.titleWrapper}>
        <Text style={styles.title}>{props.title}</Text>
      </Text>
      <HorizontalRule width={1.5} />
      <Text>Items: {props.items.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleWrapper: {
    fontSize: 20,
  },
  title: {
    fontStyle: 'italic',
  }
})


export default ListDataDisplay

