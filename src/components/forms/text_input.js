import React from 'react'
import { TextInput, View, Text } from 'react-native'

export default function MyTextInput(props) {
  const { input, placeholder, ...inputProps } = props

  return (
    <View>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        placeholder={placeholder}
      />
    </View>
  )
}
