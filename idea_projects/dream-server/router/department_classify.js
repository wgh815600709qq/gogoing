var express = require('express')
var router = express.Router()
var { success, illegal, fail } = require('../config/code-msg.js')
var { queryAll, add, queryByOne, deleteByOne, editById } = require('../module/department_classify.js')

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

export default router
