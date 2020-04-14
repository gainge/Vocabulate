import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppStyles from '../styles/AppStyles'

const TabBar = (props) => {
  return (
    <View style={styles.tabBar} >
      {
        props.tabs.map((tab, index) =>
          (
            <View key={tab.label} style={[styles.tab, (index !== props.activeTab) || styles.activeTab ]} >
              <Text style={[styles.tabHeader, (index !== props.activeTab) || styles.activeTabHeader ]}>{tab.label}</Text>
            </View>
          )
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    borderColor: AppStyles.color.tertiary,
    borderRadius: 2,
    borderWidth: 2,
  },
  tabHeader: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  tab: {
    padding: 7,
    width: '33%',
    textAlign: 'center',
  },
  activeTab: {
    backgroundColor: AppStyles.color.activeTab,
  },
  activeTabHeader: {
    color: AppStyles.color.primaryLight,
  }
})

export default TabBar
