import express from 'express'
import adminRouter from './router/admin'
const path = require('path')
const session = require('express-session')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
var bodyParser = require('body-parser') // 请求头解析中间件
var clientErrorHandler = require('./middleware/clientErrorHandler.js')
var errorHandler = require('./middleware/errorHandler.js')
var Interceptor = require('./middleware/Interceptor.js')
app.set('port', port)
app.use(express.static(path.resolve(__dirname, '../static'))) // 静态资源
app.use(bodyParser.json({limit: '2048kb'})) // 请求内容2G
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  secret: 'dreamer_app',
  cookie: {maxAge: 60 * 1000 * 30} // 过期时间
}))
// 无须登录接口
// app.use('/captcha', captchaRouter)
app.use('/admin', adminRouter)
app.use(Interceptor)
// 登录可访问分层路由
// app.use('/news', newsRouter)
// app.use('/faq', faqRouter)
// app.use('/pictures', pictureRouter)
// app.use('/asp_case', aspCaseRouter)
// app.use('/news_classify', newsClassifyRouter)
// app.use('/faq_classify', faqClassifyRouter)
// app.use('/department_classify', departmentClassifyRouter)
// app.use('/file', fileRouter)
// app.use('/api', apiRouter)
// app.use('/msg', msgRouter)
// app.use('/company_history', companyHistoryRouter)
// app.use('/friendly_link', friendlyLinkRouter)
// 错误处理
app.use(clientErrorHandler)
app.use(errorHandler)

// Listen the server
app.listen(port, host)
console.warn('Server Start on', new Date().toLocaleString())
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
