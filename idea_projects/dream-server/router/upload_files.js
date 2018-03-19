var express = require('express')
var path = require('path')
var fs = require('fs')
var router = express.Router()
var upload = require('../config/upload.js')
var { success, illegal, fail } = require('../config/code-msg.js')
var { add, queryByOne, deleteByOne, editById } = require('../module/upload_files.js')

// 上传图片
router.post('/upload', async (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log('err', err)
      return
    }
    console.log('file', req.file)
    // 调存储业务
    let data = {
      path: '/uploads/' + req.file.filename,
      primary_name: req.file.originalname
    }
    var result = await add(data)
    if (result) {
      res.send(Object.assign(success, {data: result}))
    } else {
      res.send(Object.assign(fail, {data: null}))
    }
  })
})

// 删除
router.post('/dropFile', async (req, res, next) => {
  let response = await queryByOne(req.body) // 为的是取得路劲
  if (response) {
    var name = response._path.replace('/uploads/', '')
  }
  let result = await deleteByOne(req.body)
  if (result) {
    // 文件删除
    console.log(name)
    if (name) {
      var boolean = fs.existsSync(path.resolve(__dirname, '../static/uploads/' + name))
      if (boolean) {
        fs.unlinkSync(path.resolve(__dirname, '../static/uploads/' + name))
      }
    }
    res.send(Object.assign(success, {data: null}))
  } else {
    res.send(Object.assign(illegal, {data: null}))
  }
})

// 编辑
router.post('/editFile/:id', async (req, res, next) => {
  let result = await editById(req.params.id, req.body)
  if (result[0]) {
    res.send(Object.assign(success, {data: null}))
  } else {
    res.send(Object.assign(fail, {data: null}))
  }
})

export default router
