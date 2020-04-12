import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'

import { connect } from 'react-redux'

import ListContainer from './../components/ListContainer'
import GibFAB from '../components/GibFAB';
import Page from '../components/Page';
import LingualModal from '../components/LingualModal';
import ListCreation from '../components/ListCreation';

import { showModal, hideModal, addList } from '../store/Actions'

import { uuid } from '../util/UUID'
import List from '../model/List'


class ListOverViewScreen extends Component {
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

  _onSelectList = (index) => {
    // Select list
    // This is where it would be good to structure things by ID
    // I think that we can work on refactoring that later / in a bit
    const selectedList = this.props.lists[index];

    // this.props.navigation.navigate('List', {list: selectedList})
    Alert.alert('TO BE IMPLEMENTED BUT IT GON BE FREE DW BB');

    // Time to set selected and navigate?
    // Hmmmm, actually maybe we shouldn't be handling the navigation?
    // Actually maybe we should lol
  }


  render() {
    return (
      <Page>
        <ListContainer lists={this.props.lists} onSelect={this._onSelectList} />
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

let ListOverviewContainer = connect(mapStateToProps, mapDispatchToProps)(ListOverViewScreen)


export default class ListOverview extends Component {
  render() {
    return (
      <ListOverviewContainer navigation={this.props.navigation} />
    )
  }
}
