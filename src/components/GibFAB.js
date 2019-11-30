import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { FAB } from 'react-native-paper'
import AppStyles from '../styles/AppStyles'


const GibFAB = (props) => (
  <FAB
    style={[styles.fab, props.style]}
    icon="plus"
    onPress={() => props.onPress ? props.onPress() : console.log('Pressed')}
  />
);

const styles = StyleSheet.create({
  fab: {
    backgroundColor: AppStyles.color.accent,
    position: 'absolute',
    margin: 26,
    right: 0,
    bottom: 0,
  },
})

export default GibFAB;


