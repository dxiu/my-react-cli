import axios from 'axios'
const baseUrl =
  process.env.REACT_APP_CURRENTMODE === 'localhost'
    ? '/base'
    : process.env.REACT_APP_APIBASEURL

const service = axios.create({
  baseURL: baseUrl,
  timeout: 15000
})
service.interceptors.request.use(
  config => {
    if (config.proxy) config.baseURL = config.proxy // 动态代理跨域
    config.headers = Object.assign(config.headers, {
      source: '8'
    })
    return config
  },
  error => {
    Promise.reject(error)
  }
)
window.timer = null
service.interceptors.response.use(
  response => {
    if (response.data.code) {
     
    }
    return response.data
  },
  error => {
    Promise.reject(error)
  }
)
export default service
