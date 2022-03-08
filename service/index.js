const baseURL = "http://www.zyfullstack.top:3000"
class HttpRequest {
    request(url, method, params){
        return new Promise((resolve, reject) => {
            wx.request({
                url: baseURL + url,
                method: method,
                params: params,
                success: function(res){
                    resolve(res)
                },
                fail: function (err) {
                    reject(err)
                }
              })
        })
    }
    get(url, params) {
        return this.request(url, "GET", params)
    }
    post(url, data) {
        return this.request(url, "POST", params)
    }
}

const httpRequest = new HttpRequest()

export default httpRequest