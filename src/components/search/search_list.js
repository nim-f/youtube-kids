import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { searchSelector } from '../../ducks/search'
import Preview from '../preview/preview'

function mapStateToProps(state) {
  return {
    videos: searchSelector(state)
  }
}

class SearchList extends Component {
  render() {
    const { videos } = this.props

    if (videos.length === 0)
      return (
        <View>
          <Text>Add allowed channels</Text>
        </View>
      )

    return (
      <ScrollView style={s.view}>
        {videos.map((video) => (
          <Preview video={video} key={video.id.videoId} />
        ))}
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps)(SearchList)

const s = StyleSheet.create({
  view: {
    flex: 1
  }
})
