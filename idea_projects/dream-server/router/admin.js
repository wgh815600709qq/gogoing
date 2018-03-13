const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs') // hash加密
const jwt = require('jsonwebtoken')
const path = require('path')
const fs = require('fs')
const publicKey = fs.readFileSync(path.join(__dirname, '../config/publicKey.pub'))
var { success, illegal, fail } = require('../config/code-msg.js')
var { queryAll, add, queryByOne, deleteByOne, editById } = require('../module/admin.js')

router.get('/queryAll', async (req, res, next) => {
  let result = await queryAll()
  if (result) {
    res.send(Object.assign(success, {data: result}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})

router.post('/add', async (req, res, next) => {
  let data = {
    _username: req.body.username,
    _password: req.body.password,
    name: req.body.name
  }
  let result = await add(data)
  if (result) {
    res.send(Object.assign(success, {data: result}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})

router.get('/query', async (req, res, next) => {
  let result = await queryByOne(req.query)
  if (result) {
    res.send(Object.assign(success, {data: result}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})

router.post('/delete', async (req, res, next) => {
  let result = await deleteByOne(req.body)
  if (result) {
    res.send(Object.assign(success, {data: null}))
  } else {
    res.send(Object.assign(illegal, {data: null}))
  }
})

router.post('/edit/:id', async (req, res, next) => {
  let result = await editById(req.params.id, req.body)
  if (result[0]) {
    res.send(Object.assign(success, {data: null}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})

router.post('/login', async (req, res, next) => {
  var { password } = req.body
  let result = await queryByOne({_username: req.body.username})
  if (result) {
    if (!bcrypt.compareSync(password, result._password)) {
      res.send({code: 600, msg: '密码有误'})
    } else {
      // 签发token
      let token = jwt.sign(result._username, publicKey)
      result.dataValues.token = token
      req.session.user = result
      res.send({code: 200, msg: '登录成功', data: result, token: token})
    }
  } else {
    res.send({code: 600, msg: '用户不存在'})
  }
})

export default router
