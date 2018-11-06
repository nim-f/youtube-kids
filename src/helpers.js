import { AsyncStorage } from 'react-native'

export const storeData = async (key, data) => {
  console.log('save to storage', key, data)
  try {
    await AsyncStorage.setItem(key, data)
  } catch (error) {
    // Error saving data
  }
}

export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key) //.clear(() => console.log('!!! cleared')) //
    if (value !== null) {
      console.log('get from storage', value)
      return value
    }
  } catch (error) {
    // Error retrieving data
  }
}
