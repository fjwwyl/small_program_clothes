class WxRequest {
  constructor() {

  }

  request(options) {
    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        success(res) {
          resolve(res);
        },
        fail(res) {
          reject(res);
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
export default instance;