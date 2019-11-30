import React from 'react'
import { View, StyleSheet } from 'react-native'

const Page = (props) => {
  return (
    <View style={[ styles.page, props.style ]}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  }
})


export default Page
