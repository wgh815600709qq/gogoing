/*
  路由中间件拦截器
*/
function Interceptor (req, res, next) {
  // if (req.path.indexOf('_') > -1) { // 资源文件
  //   next()
  // } else if (req.path === '/') {
  //   if (req.headers['user-agent'].indexOf('Mobile') > -1) {
  //     res.redirect('/frontend/main-page')
  //   } else {
  //     next()
  //   }
  // } else if (req.path === '/backend/login' || req.path === '/admin/login' || req.path === '/captcha/verify' || req.path === '/captcha/get') { // 后台免token、
  //   next()
  // } else if (req.path.indexOf('/api') > -1 || req.path.indexOf('/frontend') > -1 || req.path.indexOf('/frontend-pc') > -1) { // 客户端免token
  //   next()
  // } else {
  //   if (req.session.user) {
  //     next()
  //   } else {
  //     if (req.path.indexOf('/backend') > -1) {
  //       res.redirect('/backend/login') // session内token过期
  //     } else {
  //       next()
  //     }
  //   }
  // }
}

module.exports = Interceptor
