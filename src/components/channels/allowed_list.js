import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function AllowedList(props) {
  return (
    <View>
      <TouchableOpacity style={s.label}>
        <Text style={s.labelText}>Allowed channels</Text>
      </TouchableOpacity>
      <View style={s.channelsList}>
        {props.channels.map((channel, index) => (
          <View key={channel.channelId} style={s.channel}>
            <Text>{channel.title}</Text>
            <TouchableOpacity
              onPress={() => props.deleteChannel(channel.channelId)}
            >
              <Text>delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  )
}

export default AllowedList

const s = StyleSheet.create({
  label: {
    padding: 15
  },
  labelText: {
    textTransform: 'uppercase',
    fontSize: 13
  },
  channelsList: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#d6d7da'
  },
  channel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#d6d7da'
  }
})
