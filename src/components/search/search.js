import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { searchRequest } from "../../ducks/search";

import SearchForm from "./search_form";

class Search extends Component {

  submitForm = ({search}) => {
    this.props.searchRequest(search)
  }

  render() {
    return (
      <View style={s.searchContainer}>
        <SearchForm onSubmit={this.submitForm} />
      </View>
    );
  }
}

const s = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    height: 30,
    width: 300
  },
  searchContainer: {
    backgroundColor: 'red',
    padding: 15
  },
  icon: {
    fontSize: 30
  }
});

export default connect(
  null,
  { searchRequest }
)(Search);


