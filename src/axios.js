import axios from 'axios'

//HackerNewsからのbaseURLリクエストを作成
const instance = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
})

export default instance
