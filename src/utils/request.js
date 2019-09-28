import qs from 'qs'
import md5 from 'md5'
import axios from 'axios'
import moment from 'moment'
import consola from 'consola'

import router from '@/router'
import { optionSort } from '@/utils'
import { Message } from 'element-ui'

// axios.create使用自定义配置新建一个 axios 实例
const _axios = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // axios默认是发送请求的时候不会带上cookie的，需要通过设置withCredentials: true来解决
  // withCredentials: true,
  timeout: 50000 //超过了50s，就会告知用户当前请求超时，请刷新等。
})

// request拦截器  请求拦截器
_axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
// respone拦截器 响应拦截器
_axios.interceptors.response.use(
  response => response.data, // 对响应数据做点什么
  error => {
    // 对响应错误做点什么
    if (error.response) {
      switch (error.response.status) {
        case 400:
          Message.error('抱歉！您没有该项操作权限！')
          break
        case 401:
          router.replace({
            path: 'login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
          break
      }
    }
    return Promise.reject(error.response)
  }
)

// 封装axios
const request = function(
  url = '',
  data = {},
  type = 'get',
  origin = false,
  sort = true
) {
  let options = null
  data = sort ? optionSort(data) : data
  type = type.toLowerCase()
  if (type === 'get') {
    options = {
      params: data
    }
  } else if (type === 'post') {
    options = qs.stringify(data, { arrayFormat: 'repeat' })
  }

  return new Promise(async (resolve, reject) => {
    try {
      let res = await _axios[type](url, options)
      if (res.status === '1' && !res.error) {
        resolve(origin ? res : res.data)
      } else {
        Message.error(res.error || '服务异常')
        reject(res)
      }
    } catch (err) {
      reject(err)
    }
  })
}

export default request
