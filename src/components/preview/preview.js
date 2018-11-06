import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native'

class Preview extends Component {
  saveChannel = (id, title) => {
    this.props.addChannel(id, title)
    console.log('id', id)
  }

  render() {
    const {
      video: { snippet, id },
      channel
    } = this.props
    const win = Dimensions.get('window')
    const imageWidth = win.width - 40 // 40 = padding of snippet
    const ratio = imageWidth / 480
    return (
      <View key={id} style={s.snippet}>
        <Image
          style={{ width: imageWidth, height: 360 * ratio }}
          source={{ uri: snippet.thumbnails.high.url }}
        />
        <View>
          <View>
            {!channel ? <Text style={s.title}>{snippet.title}</Text> : null}
            <Text style={s.channel}>{snippet.channelTitle}</Text>
          </View>
          <View>
            {channel ? (
              <TouchableOpacity
                onPress={() =>
                  this.saveChannel(id.channelId, snippet.channelTitle)
                }
              >
                <Text>Save Channel</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    )
  }
}

Preview.propTypes = {
  video: PropTypes.object.isRequired
}

const s = StyleSheet.create({
  snippet: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9'
  },
  title: {
    paddingTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  channel: {
    paddingTop: 5,
    fontSize: 14,
    color: '#7d7d7d'
  }
})
export default Preview
