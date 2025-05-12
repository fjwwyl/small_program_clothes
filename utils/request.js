import {
  getStorage
}
from "./storage.js"
import {
  toast
} from './global.js'
class WxRequest {
  constructor() {

  }

  // 默认配置
  defaults = {
    header: {

    }
  }
  // 拦截器
  interceptors = {
    request: (config) => config,
    response: (response) => response
  }

  request(options) {
    options = {
      ...this.defaults,
      ...options
    };
    options = this.interceptors.request(options);

    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        success: (res) => {
          resolve(this.interceptors.response(Object.assign({}, res, {
            config: options
          })));
        },
        fail: (err) => {
          reject(resolve(this.interceptors.response(Object.assign({}, err, {
            config: options
          }))));
        }
      })
    })
  }

  get(url, data = {}, config = {}) {
    return this.request(Object.assign({
      url,
      method: "GET",
      data
    }, config))
  }

  post(url, data = {}, config = {}) {
    return this.request(Object.assign({
      url,
      method: "POST",
      data
    }, config))
  }

  put(url, data = {}, config = {}) {
    return this.request(Object.assign({
      url,
      method: "PUT",
      data
    }, config))
  }

  delete(url, data = {}, config = {}) {
    this.request(Object.assign({
      url,
      method: "DELETE",
      data
    }, config))
  }
}

const instance = new WxRequest();
instance.interceptors.request = (config) => {
  const token = getStorage("token");
  if (token) {
    config.header["token"] = token;
  }

  return config;
}
instance.interceptors.response = (response) => {
  const {
    statusCode
  } = response;
  if (statusCode === 200) { //todo
  }

  if (statusCode === 401) {
    toast({
      title: "未登录！",
      icon: "error"
    })
    //todo  踢到登录页面
  }
  return response.data;
}
export default instance;