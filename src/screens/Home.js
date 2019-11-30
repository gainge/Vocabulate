import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import { Button } from 'react-native-elements'

import ListContainer from './../components/ListContainer'
import GibFAB from '../components/GibFAB';
import Page from '../components/Page';
import LingualModal from '../components/LingualModal';

// Load app data
import { appData } from './../util/DataLoader';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lists: [ appData ],
      modalShown: false
    }
  }

  _onAddItem = () => {
    // Just toggle the modal for now
    this._showModal();
  }

  _showModal = () => {
    this.setState({ modalShown: true })
  }

  _hideModal = () => {
    this.setState({ modalShown: false })
  }


  render() {
    return (
      <Page>
        <ListContainer lists={this.state.lists} />
        <GibFAB
          onPress={this._showModal}
        />

        <LingualModal
          isVisible={this.state.modalShown}
        >
          <Button
            title="Close!"
            onPress={this._hideModal}
          />
        </LingualModal>
      </Page>
    )
  }
}
