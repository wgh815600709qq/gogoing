/* 此页面的接口全部对应官网首页前端 */
var express = require('express')
var router = express.Router()
var { success, fail } = require('../config/code-msg.js')

/* 官网首页接口 */
router.get('/getCarousel', async (req, res, next) => { // 获取轮播图按排序
  var { apiQuery } = require('../module/picture.js')
  let result = await apiQuery()
  if (result) {
    res.send(Object.assign(success, {data: result}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})

router.get('/getCaseByDep', async (req, res, next) => { // 根据科室获取asp案例,定义返回个数[返回状态为置顶的项]
  let { apiQuery } = require('../module/asp_case.js')
  let result = await apiQuery(req.query)
  if (result) {
    res.send(Object.assign(success, {data: result}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})

router.get('/getAllNews', async (req, res, next) => { // 根据置顶情况获取新闻, 定义返回个数
  var { apiQuery } = require('../module/news.js')
  let result = await apiQuery()
  if (result) {
    res.send(Object.assign(success, {data: result}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})

router.get('/getNewsByCla', async (req, res, next) => { // 根据置顶情况获取新闻, 定义返回个数
  var { apiQueryByClassify } = require('../module/news.js')
  let result = await apiQueryByClassify(req.query)
  if (result) {
    res.send(Object.assign(success, {data: result}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})

router.get('/getFaqByCla', async (req, res, next) => {
  var { apiQueryByClassify } = require('../module/faq.js')
  let result = await apiQueryByClassify(req.query)
  res.send(Object.assign(success, {data: result}))
})

router.get('/getAspCaseClassify', async (req, res, next) => { // 获取asp分类
  var { queryAll } = require('../module/department_classify.js')
  let result = await queryAll()
  if (result) {
    res.send(Object.assign(success, {data: result}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})

router.get('/getNewsClassify', async (req, res, next) => { // 获取新闻分类
  var { queryAll } = require('../module/news_classify.js')
  let result = await queryAll()
  if (result) {
    res.send(Object.assign(success, {data: result}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})

router.get('/getFaqClassify', async (req, res, next) => { // 获取帮助中心问题分类
  var { queryAll } = require('../module/faq_classify.js')
  let result = await queryAll()
  if (result) {
    res.send(Object.assign(success, {data: result}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})

/* 获取友情链接 */
router.get('/getFriendlyLinks', async (req, res, next) => {
  var { queryAll } = require('../module/friendly_link.js')
  let result = await queryAll()
  if (result) {
    res.send(Object.assign(success, {data: result}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})
/* 获取公司历程 */
router.get('/getCompanyHistory', async (req, res, next) => {
  var { queryAll } = require('../module/company_link.js')
  let result = await queryAll()
  if (result) {
    res.send(Object.assign(success, {data: result}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})

export default router
