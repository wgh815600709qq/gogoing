var { connection, Sequelize } = require('../database/connect.js')
const faqModel = require('../schema/faq.js')
const faqClassifyModel = require('../schema/faq_classify.js')
var Faq = faqModel(connection, Sequelize)
var FaqClassify = faqClassifyModel(connection, Sequelize)
FaqClassify.hasMany(Faq, {foreignKey: 'classify_id'})
Faq.belongsTo(FaqClassify, {foreignKey: 'classify_id'})

async function queryAllByPage (data) { // 查所有
  let limit = +data.pageSize
  let offset = (+data.currentPage - 1) * limit
  let res = await Faq.findAndCount({
    include: [
      { model: FaqClassify, required: true }
    ],
    limit: limit,
    offset: offset
  })
  return res
}

async function queryByOne (data) { // 根据单条数据查询
  let res
  let limit = +data.pageSize
  let offset = (+data.currentPage - 1) * limit
  if (+data.classify_id === 0) {
    res = await queryAllByPage(data)
  } else {
    delete data.currentPage
    delete data.pageSize
    res = await Faq.findAndCount({
      include: [
        { model: FaqClassify, required: true }
      ],
      where: data,
      limit: limit,
      offset: offset
    })
  }
  return res
}

async function add (data) { // 新增
  let res = await Faq.create(data)
  return res
}

async function deleteByOne (data) { // 根据单条数据删除(软)
  let res = await Faq.destroy({
    where: data
  })
  return res
}

async function editById (id, data) { // 根据id改
  let res = await Faq.update(data, {
    where: {id: id}
  })
  return res
}

async function apiQueryByClassify (data) {
  var cid = data.classify_id
  let res
  if (cid > 0) {
    res = await Faq.findAll({where: data})
  } else {
    res = await Faq.findAll()
  }
  return res
}

export {
  apiQueryByClassify,
  queryAllByPage,
  add,
  queryByOne,
  deleteByOne,
  editById
}
