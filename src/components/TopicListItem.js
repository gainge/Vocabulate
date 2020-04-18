import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TopicListItem = () => {
  return (
    <View style={[styles.contentContainer, ]}>
      <Text style={[styles.topicContent, ]} numberOfLines={1} >I'm a sick topic, check me outal fkaj dflkaj dflkaj !</Text>
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
