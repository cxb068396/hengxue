import axios from 'axios'
import { getToken } from '@/utils/token.js'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000,
})

service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] =getToken()
    }
     config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error);
  }
)

export default service