export function request(options) {
  const baseUrl = ''
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url,
      dataType: 'json',
      method: options.type || 'GET',
      timeout: 5000,
      data: options.data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        resolve(res)
      },
      fail(res) {
        reject(res)
      }
    })
  })
}