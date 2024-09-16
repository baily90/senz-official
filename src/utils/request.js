import axios from 'axios'
import { useAppStore } from '@/stores/modules/app'
import { showToast } from 'vant'
import 'vant/es/toast/style'

const request = axios.create({
  timeout: 30 * 1000
})

request.interceptors.request.use((config) => {
  config.url = `${import.meta.env.VITE_API_URL}${config.url}`
  const appStore = useAppStore()
  const { token } = storeToRefs(appStore)
  if (token.value) {
    config.headers.Authorization = 'Bearer ' + token.value
  }
  return config
})

request.interceptors.response.use(
  (response) => {
    const appStore = useAppStore()
    const { logout } = appStore
    if (response.data.code === 0) {
      return response.data
    } else {
      if (response.data.code === 401 || response.data.code === 1404001000) {
        showToast(response.data.msg || '登录凭证失效，请重新登录')
        logout()
      } else if (response.data.code !== 0) {
        showToast(response.data.msg || 'Error')
      }
    }
  },
  (error) => {
    let message = ''
    const status = error.response?.status
    switch (status) {
      case 400:
        message = '请求错误'
        break
      case 401:
        message = '登录凭证失效，请重新登录'
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = `请求地址出错: ${error.response?.config?.url}`
        break
      case 408:
        message = '请求超时'
        break
      case 500:
        message = '服务器内部错误'
        break
      case 501:
        message = '服务未实现'
        break
      case 502:
        message = '网关错误'
        break
      case 503:
        message = '服务不可用'
        break
      case 504:
        message = '网关超时'
        break
      case 505:
        message = 'HTTP版本不受支持'
        break
      default:
        message = '网络连接故障'
    }
    if (error.code === 'ECONNABORTED') {
      message = '请求超时,请稍后重试'
    }
    showToast(message)
    return Promise.reject(error)
  }
)

export default request
