import React, { Component } from 'react'

import { Button } from 'react-native-elements'
import { connect } from 'react-redux'

import ListContainer from './../components/ListContainer'
import GibFAB from '../components/GibFAB';
import Page from '../components/Page';
import LingualModal from '../components/LingualModal';

import { showModal, hideModal } from '../store/Actions'


class HomeScreen extends Component {

  _showModal = () => {
    this.props.showModal();
  }

  _hideModal = () => {
    this.props.hideModal();
  }


  render() {
    return (
      <Page>
        <ListContainer lists={this.props.lists} />
        <GibFAB
          onPress={this._showModal}
        />

        <LingualModal
          isVisible={this.props.modalShown}
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

const mapStateToProps = state => ({
  lists: state.lists,
  modalShown: state.modalShown,
})

const mapDispatchToProps = {
  showModal,
  hideModal
}

let HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

export default class Home extends Component {
  render() {
    return (
      <HomeContainer />
    )
  }
}
