import React, { Component } from 'react'
import SearchList from '../components/search/search_list'
import Search from '../components/header/header'

import { View, SafeAreaView } from 'react-native'
class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <SafeAreaView>
        <Search />
        <SearchList />
      </SafeAreaView>
    )
  }
}

export default SearchScreen
