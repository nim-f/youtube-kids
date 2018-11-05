import React, { Component } from 'react'
import { View, Text } from 'react-native'

function AllowedList(props) {
  return (
    <View>
      {props.channels.map((channel, index) => (
        <View key={channel}>
          <Text>{channel}</Text>
        </View>
      ))}
    </View>
  )
}

export default AllowedList
