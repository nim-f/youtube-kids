import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import MyTextInput from '../forms/text_input'
import { connect } from 'react-redux'
import { channelSearchRequest } from '../../ducks/channels'

class ChannelsForm extends Component {
  changeHandler = (e) => {
    this.props.channelSearchRequest(e)
  }
  render() {
    return (
      <ScrollView>
        <View style={s.formRow}>
          <Text>Add allowed channels</Text>
          <Field
            placeholder="Type to search..."
            onChange={(e) => this.changeHandler(e)}
            style={s.formInput}
            name={'channel'}
            component={MyTextInput}
          />
        </View>
      </ScrollView>
    )
  }
}

export default connect(
  null,
  {
    channelSearchRequest
  }
)(reduxForm({ form: 'channels' })(ChannelsForm))

const s = StyleSheet.create({
  formRow: {
    padding: 15,
    backgroundColor: '#fff'
  },
  formInput: {
    height: 30,
    borderBottomWidth: 1,
    borderColor: '#d6d7da'
  }
})
