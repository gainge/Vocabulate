import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TopicListItem = (props) => {
  return (
    <View style={[styles.contentContainer, ]}>
      <Text style={[styles.topicContent, ]} numberOfLines={1} >{props.topic.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  topicContent: {
    fontSize: 17,
  },
  contentContainer: {
    paddingVertical: 6,
  }
})

export default TopicListItem
