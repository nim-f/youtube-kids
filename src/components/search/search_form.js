import React from 'react';
import { reduxForm, Field } from 'redux-form';
import MyTextInput from "../forms/text_input";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const SearchForm = (props) => {
  return (
    <View style={s.container}>
      <Field
        style={s.input}
        name={'search'}
        component={MyTextInput}
      />
      <TouchableOpacity onPress={props.handleSubmit}>
        <Icon name="search" color="#fff" style={s.icon} />
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    height: 30,
    width: 300
  },
  icon: {
    fontSize: 30
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default reduxForm({ form: 'search' })(SearchForm);