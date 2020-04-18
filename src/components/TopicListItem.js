import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppStyles from '../styles/AppStyles'

const TopicListItem = (props) => {
  return (
    <View style={[styles.contentContainer, ]}>
      <Text style={[styles.topicContent, ]} numberOfLines={10} >{props.topic.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  topicContent: {
    fontSize: 17,
    // color: AppStyles.color.textLightSecondary,
    color: '#111'
  },
  contentContainer: {
    paddingVertical: 5,
  }
})

export default TopicListItem
