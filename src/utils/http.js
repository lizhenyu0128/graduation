import axios from 'axios'

const rootUrl = 'http://149.129.33.213:8082'
console.log('DDD')
axios.defaults.timeout = 10000
axios.defaults.baseURL = ''
// http request 拦截器
axios.interceptors.request.use(
  config => {
    console.log(config)
    // const token = getCookie('名称')注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

function middleware (resolve, data) {
  resolve(data.data)
}

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(rootUrl + url, {
        params: params
      })
      .then(response => {
        middleware(resolve, response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(rootUrl + url, data).then(
      response => {
        middleware(resolve, response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function del (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(rootUrl + url, data).then(
      response => {
        middleware(resolve, response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(rootUrl + url, data).then(
      response => {
        middleware(resolve, response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

export default {
  get: get,
  post: post,
  del: del,
  put: put
}
