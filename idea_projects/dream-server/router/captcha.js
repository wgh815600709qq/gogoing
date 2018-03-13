// 验证码直接在router解决
var express = require('express')
var router = express.Router()
var { success, fail } = require('../config/code-msg.js')
var svgCaptcha = require('svg-captcha')

// 获取
router.post('/get', async (req, res, next) => {
  var codeConfig = {
    size: 4, // 验证码长度
    ignoreChars: '0o1i', // 验证码字符中排除 0o1i
    noise: 2, // 干扰线条的数量
    height: 40
  }
  var captcha = svgCaptcha.create(codeConfig)
  req.session.captcha = captcha.text.toLowerCase() // 存session用于验证接口获取文字码
  console.log('验证码', captcha.text.toLowerCase())
  console.log('session内验证码', req.session.captcha)
  var codeData = {
    img: captcha.data
  }
  res.send(Object.assign(success, {data: codeData}))
})

// 验证
router.post('/verify', async (req, res, next) => {
  console.log('回话记录的验证码', req.session.captcha)
  if (req.body.code === req.session.captcha) {
    res.send(Object.assign(success, {data: null}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})

export default router
