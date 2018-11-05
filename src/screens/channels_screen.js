import React, { Component } from 'react'
import { View } from 'react-native'
import ChannelsForm from '../components/channels/channels_form'
import ChannelsList from '../components/channels/channels_list'

class Channels extends Component {
  static navigationOptions = {
    title: 'Channels'
  }

  render() {
    return (
      <View>
        <ChannelsForm />
        <ChannelsList />
      </View>
    )
  }
}

export default Channels
