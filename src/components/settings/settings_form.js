import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import MyTextInput from '../forms/text_input'

class SettingsForm extends Component {
  render() {
    return (
      <ScrollView>
        <View style={s.formRow}>
          <Text>Add allowed channels</Text>
          <Field style={s.formInput} name={'channel'} component={MyTextInput} />
        </View>
      </ScrollView>
    )
  }
}

export default reduxForm({ form: 'settings' })(SettingsForm)

const s = StyleSheet.create({
  formRow: {
    padding: 10
  },
  formInput: {
    height: 30,
    borderBottomWidth: 1,
    borderColor: '#d6d7da'
  }
})
