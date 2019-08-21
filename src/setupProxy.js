const proxy = require('http-proxy-middleware')
module.exports = function (app){
  app.use(proxy('/api', {
    target: 'https://mch-sit.holderzone.cn/gateway/weixin',
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/"
     }
  }));
  app.use(proxy('/base', {
    target: 'http://192.168.102.141:8163',
    changeOrigin: true,
    pathRewrite: {
      "^/base": "/"
     }
  }))
}