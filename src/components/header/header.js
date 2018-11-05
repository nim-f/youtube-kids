import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Search from '../search/search'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Header extends Component {
  render() {
    return (
      <View style={s.headerContainer}>
        <Search />
      </View>
    )
  }
}

const s = StyleSheet.create({
  icon: {
    fontSize: 30
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 15
  }
})

export default Header
