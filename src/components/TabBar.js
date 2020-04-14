import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AppStyles from '../styles/AppStyles'

const TabBar = (props) => {
  return (
    <View style={styles.tabBar} >
      {
        props.tabs.map((tab, index) => {
          if (index === props.activeTab) {
            return (
              <View key={tab.label} style={[styles.tab, styles.activeTab ]} >
                <Text style={[styles.tabHeader, styles.activeTabHeader ]}>{tab.label}</Text>
              </View>
            )
          } else {
            return (
              <TouchableOpacity
                key={tab.label}
                style={styles.tab}
                onPress={() => (props.onSelectTab) && props.onSelectTab(index)}
                >
                <Text style={styles.tabHeader}>{tab.label}</Text>
              </TouchableOpacity>
            )
          }
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
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
    flex: 1,
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
