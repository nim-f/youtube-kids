import React from 'react'
import { reduxForm, Field } from 'redux-form'
import MyTextInput from '../forms/text_input'
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const SearchForm = (props) => {
  const win = Dimensions.get('window')
  const inputWidth = win.width - 65
  return (
    <View style={s.container}>
      <Field
        style={[s.input, { width: inputWidth }]}
        name={'search'}
        component={MyTextInput}
      />
      <TouchableOpacity onPress={props.handleSubmit}>
        <Icon name="search" color="#fff" style={s.icon} />
      </TouchableOpacity>
    </View>
  )
}

const s = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    height: 30,
    marginRight: 10
  },
  icon: {
    fontSize: 30
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default reduxForm({ form: 'search' })(SearchForm)
