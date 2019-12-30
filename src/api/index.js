/*
 * @Descripttion: Do not edit
 */
/**
 * main.js
 * ----------------------
 * import api from './api/index.js'
 * ----------------------
 * 组件中使用方法(以post为例):
 * this.$http.post(url,params,response=>{});
 * 使用注意：
 *  - 常用只传三个参数，避免参数过长
 *  - 传参格式：
 *    - url: {
 *        type: json|formData|multipart,
 *        api: '/user/userLogin.html'
 *      }
 *    - params: object | null
 *    - response: success callback
 *  - url地址对象建议使用单独的js文件管理
 */

// 引用axios
import axios from 'axios'
import Qs from 'qs'
import {toType, filterNull} from '@/utils/index'
import { prefixUrl } from '@/utils/common'
import { MessageBox } from 'element-ui'

axios.defaults.withCredentials = true
axios.defaults.timeout = 10000
// 添加请求拦截器
axios.interceptors.request.use(function(config) {
  if (config.params) {
    const keys = Object.keys(config.params)
    for (const key of keys) {
      if (toType(config.params[key]) === 'string') {
        config.params[key] = decodeURIComponent(config.params[key])
      }
    }
  }
  // 在发送请求之前做些什么
  config.data = filterNull(config.data)
  // 统一添加token
  const token = localStorage.getItem('user_key') ? JSON.parse(localStorage.getItem('user_key')).token : ''
  config.headers['token'] = token
  if (location.port) {
    config.headers.common['X-Auth0-Token'] = '2ee9138a1df794ee987f682aa13213f6' // 417db4ae042a8be14b469bfaffa9da66
  } else {
    config.headers.common['X-Auth0-Token'] = token
  }
  // qs转化formData
  if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded; charset=UTF-8') {
    config.data = Qs.stringify(config.data)
  }
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  // 认证时效已过期处理:code末尾为20002
  let code = (response.data.code).toString()
  const isTrue = (code.length > 5) && (code.substr(code.length - 5) == 20002)
  if (response.data.code === 0 || response.data.code === '0') {
    return response.data
  } else {
    // 其他特殊状态码在这里添加 return
    console.log('response.code != 0', response)
    if (response.data.code == -401 || response.data.code == 9001 ||
      response.data.code == 40001 || isTrue) {
      MessageBox.confirm(response.data.msg || '请登录', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const current = window.location.href // 获取当前url做重定向
        window.location.href = 'login.html?redirect_cb=' + current
      })
    } else {
      MessageBox.confirm(response.data.msg || '请求失败', '提示', {
        confirmButtonText: '确定',
        type: 'warning',
        center: true,
        showCancelButton: false
      })
    }
    return response.data
    /* return Promise.reject(response.data) */
  }
}, function(error) {
  // 对响应错误做点什么
  MessageBox.confirm('网络错误', '提示', {
    confirmButtonText: '确定',
    type: 'error',
    center: true,
    showCancelButton: false
  })
  return error
  /* return Promise.reject(error) */
})

function apiAxios(method, url, params, success) {
  // 根据URL地址对象确定使用什么方式请求 --> 请求拦截器处理
  // if (url.type === 'json') {
  //   if (params) {
  //     params = util.filterNull(params)
  //   }
  // } else if (url.type === 'formData') {
  //   const _params = new URLSearchParams()
  //   if (params) {
  //     params = util.filterNull(params)
  //     // JSON 转换为 FormData
  //     Object.keys(params).forEach(key => _params.append(key, params[key]))
  //     params = _params
  //   }
  // }

  const jsonHeader = {
    'Content-Type': 'application/json; charset=UTF-8'
  }
  const formDataHeader = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
  const multipartHeader = {
    'Content-Type': 'multipart/form-data; charset=UTF-8'
  }

  axios({
    method: method,
    url: !url.api.includes('http') ? prefixUrl + url.api : url.api,
    headers: url.type === 'json' ? jsonHeader : url.type === 'formData' ? formDataHeader : multipartHeader,
    data: method === 'POST' || method === 'PUT' ? params : null,
    dataType: 'json',
    params: method === 'GET' || method === 'DELETE' ? params : null,
    withCredentials: false
  }).then(function(res) {
    // if (res.data.code === 0) {
    //   if (success) {
    //     success(res.data)
    //   }
    // } else {
    //   if (failure) {
    //     failure(res.data)
    //   }
    // }
    success && success(res.data, res.code, res.msg)
  })
  // .catch(function (err) {
  //   throw new Error(err)
  // })
}

// 返回在vue模板中的调用接口
// export default {
//   get: function (url, params, success, failure) {
//     return apiAxios('GET', url, params, success, failure)
//   },
//   post: function (url, params, success, failure) {
//     return apiAxios('POST', url, params, success, failure)
//   },
//   put: function (url, params, success, failure) {
//     return apiAxios('PUT', url, params, success, failure)
//   },
//   delete: function (url, params, success, failure) {
//     return apiAxios('DELETE', url, params, success, failure)
//   }
// }
export default {
  get: function(url, params, success) {
    return apiAxios('GET', url, params, success)
  },
  post: function(url, params, success) {
    return apiAxios('POST', url, params, success)
  },
  put: function(url, params, success) {
    return apiAxios('PUT', url, params, success)
  },
  delete: function(url, params, success) {
    return apiAxios('DELETE', url, params, success)
  }
}
