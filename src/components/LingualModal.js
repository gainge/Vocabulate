import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Modal from 'react-native-modal'
import AppStyles from '../styles/AppStyles'


export default class LingualModal extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <View>
        <Modal
          isVisible={this.props.isVisible}
          backdropColor={AppStyles.color.inactive}
          onBackdropPress={this.props.onClose}
          onBackButtonPress={this.props.onClose}
        >
          <View style={styles.modalContentContainer}>
            {this.props.children}
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modalContentContainer: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    elevation: 10,
  },
})

