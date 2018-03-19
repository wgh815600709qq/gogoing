var { connection, Sequelize } = require('../database/connect.js')
const newsClassifyModel = require('../schema/news_classify.js')
var NewsClassify = newsClassifyModel(connection, Sequelize)

async function queryAll () { // 查所有
  let res = await NewsClassify.findAll()
  return res
}

async function queryByOne (data) { // 根据单条数据查询
  let res = await NewsClassify.findOne({
    where: data
  })
  return res
}

async function add (data) { // 新增
  let res = await NewsClassify.create(data)
  return res
}

async function deleteByOne (data) { // 根据单条数据删除(软)
  let res = await NewsClassify.destroy({
    where: data
  })
  return res
}

async function editById (id, data) { // 根据id改
  let res = await NewsClassify.update(data, {
    where: {id: id}
  })
  return res
}

export {
  queryAll,
  add,
  queryByOne,
  deleteByOne,
  editById
}
