import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { channelSearchSelector } from '../../ducks/channels'
import {
  addAllowedChannel,
  getAllowedChannels,
  deleteAllowedChannel,
  allowedChannelsSelector
} from '../../ducks/storage'
import Preview from '../preview/preview'
import AllowedList from '../channels/allowed_list'

function mapStateToProps(state) {
  return {
    channels: channelSearchSelector(state),
    allowed: allowedChannelsSelector(state)
  }
}

class ChannelsList extends Component {
  componentDidMount() {
    this.props.getAllowedChannels()
  }

  render() {
    return (
      <ScrollView>
        <AllowedList
          channels={this.props.allowed}
          deleteChannel={this.props.deleteAllowedChannel}
        />
        {this.props.channels.map((channel) => (
          <Preview
            video={channel}
            key={channel.id.channelId}
            channel
            addChannel={this.props.addAllowedChannel}
          />
        ))}
      </ScrollView>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    addAllowedChannel,
    getAllowedChannels,
    deleteAllowedChannel
  }
)(ChannelsList)
