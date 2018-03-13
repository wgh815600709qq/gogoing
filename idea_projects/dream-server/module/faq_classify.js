var { connection, Sequelize } = require('../database/connect.js')
const faqClassifyModel = require('../schema/faq_classify.js')
var FaqClassify = faqClassifyModel(connection, Sequelize)

async function queryAll () { // 查所有
  let res = await FaqClassify.findAll()
  return res
}

async function queryByOne (data) { // 根据单条数据查询
  let res = await FaqClassify.findOne({
    where: data
  })
  return res
}

async function add (data) { // 新增
  let res = await FaqClassify.create(data)
  return res
}

async function deleteByOne (data) { // 根据单条数据删除(软)
  let res = await FaqClassify.destroy({
    where: data
  })
  return res
}

async function editById (id, data) { // 根据id改
  let res = await FaqClassify.update(data, {
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
