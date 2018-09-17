import axios from 'axios'
import { API_KEY } from '../api_keys'

export const BASE_URL = 'https://www.googleapis.com/youtube/v3/'

export const search = (query) => {
  const searchUrl = `${BASE_URL}/search/?key=${API_KEY}&part=snippet,id&order=date&maxResults=10&q=${query}`
  return axios.get(searchUrl)
}
