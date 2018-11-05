import axios from 'axios'
import { API_KEY } from '../api_keys'

export const BASE_URL = 'https://www.googleapis.com/youtube/v3'

export const search = (query) => {
  const searchUrl = `${BASE_URL}/search/?key=${API_KEY}&part=snippet&maxResults=10&q=${query}`
  console.log(searchUrl)
  return axios.get(searchUrl)
}
export const searchChannels = (query) => {
  const searchUrl = `${BASE_URL}/search/?key=${API_KEY}&part=snippet&type=channel&maxResults=10&q=${query}`
  console.log(searchUrl)
  return axios.get(searchUrl)
}

// export const searchChannels = (query) => {
//   const searchUrl = `${BASE_URL}/channels/?key=${API_KEY}&part=snippet&maxResults=10&forUsername=${query}`
//   console.log(searchUrl)
//   return axios.get(searchUrl)
// }
