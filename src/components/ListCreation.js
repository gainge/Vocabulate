import React, { Component } from 'react'
import { Keyboard, View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'

import Strings from '../../assets/data/Strings'
import AppStyles from '../styles/AppStyles'

export default class ListCreation extends Component {
  constructor(props) {
    super(props)

    this.state = {
       listName: ''
    }
  }

  _onSubmit = () => {
    Keyboard.dismiss();
    this.props.onSubmit(this.state.listName)
  }


  render() {
    return (
      <View>
        <Input
          label={Strings.newListNamePrompt}
          value={this.state.listName}
          onChangeText={(text) => this.setState({listName: text})}
          containerStyle={styles.inputContainer}
        />
        <Button
          title={Strings.submitNewListButton}
          disabled={!this.state.listName}
          containerStyle={styles.submitButtonContainer}
          buttonStyle={styles.submitButton}
          onPress={this._onSubmit}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 0,
  },
  submitButtonContainer: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: AppStyles.color.secondary,
    paddingHorizontal: 20,
  }
})



