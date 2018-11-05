/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/redux'
import { MainNavigator } from './src/screens/navigator'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}
//
const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
