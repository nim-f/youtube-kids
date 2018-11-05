import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings'
  }

  onPressItem = (route) => {
    this.props.navigation.navigate(route)
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={s.item}
          onPress={() => this.onPressItem('channels')}
        >
          <Text>Choose allowed channels</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Settings

const s = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#cbcbcb',
    backgroundColor: '#fff'
  }
})
