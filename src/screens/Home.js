import React, { Component } from 'react'

import { connect } from 'react-redux'

import ListContainer from './../components/ListContainer'
import GibFAB from '../components/GibFAB';
import Page from '../components/Page';
import LingualModal from '../components/LingualModal';
import ListCreation from '../components/ListCreation';

import { showModal, hideModal, addList } from '../store/Actions'

import { uuid } from '../util/UUID'
import List from '../model/List'


class HomeScreen extends Component {

  _showModal = () => {
    this.props.showModal();
  }

  _hideModal = () => {
    this.props.hideModal();
  }

  _addList = (listName) => {
    // Validate list
    // Call dispatch prop homie
    // that's totally not always going to be dispatch
    // And could definitely be anything because this component is contextless
    if (!listName) {
      return;
    }

    // Otherwise we have to make a model object and use the dispatch dude
    const date = new Date().getTime();
    const id = uuid();

    const newList = new List(id, listName, date);

    // TODO: investigate proptypes warning on adding list?

    // Actually update some state, how about
    this.props.addList(newList);
    this._hideModal();
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
          onClose={this._hideModal}
        >
          <ListCreation
            onSubmit={this._addList}
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
  hideModal,
  addList,
}

let HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

export default class Home extends Component {
  render() {
    return (
      <HomeContainer />
    )
  }
}
