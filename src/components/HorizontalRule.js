
import React from 'react'
import { View, StyleSheet } from 'react-native'


const HorizontalRule = (props) => {

  const propStyle = {
    ...props.color && { borderBottomColor: props.color },
    ...props.inset && {
      marginLeft: props.inset,
      marginRight: props.inset,
    },
    ...props.insetLeft && { marginLeft: props.insetLeft },
    ...props.insetRight && { marginLeft: props.insetRight },
    ...props.width && { borderBottomWidth: props.width },
  }

  return (
    <View style={[styles.rule, propStyle ]}/>
  )
}

const styles = StyleSheet.create({
  rule: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  }
})


export default HorizontalRule
