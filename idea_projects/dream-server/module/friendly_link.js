var { connection, Sequelize } = require('../database/connect.js')
const FriendlyLinkModel = require('../schema/friendly_link.js')
var FriendlyLink = FriendlyLinkModel(connection, Sequelize)

async function queryAll () { // 查所有
  let res = await FriendlyLink.findAll({})
  return res
}

async function queryAllByPage (data) { // 根据分页查询
  let limit = data.pageSize ? (+data.pageSize) : 10
  let offset = data.currentPage ? (+data.currentPage - 1) * limit : 0
  let res
  res = await FriendlyLink.findAndCount({
    limit: limit,
    offset: offset,
    where: data
  })
  return res
}

async function add (data) { // 新增
  let res = await FriendlyLink.create(data)
  return res
}

async function deleteByOne (data) { // 根据单条数据删除(软)
  let res = await FriendlyLink.destroy({
    where: data
  })
  return res
}

async function editById (id, data) { // 根据id改
  let res = await FriendlyLink.update(data, {
    where: {id: id}
  })
  return res
}

export {
  queryAll,
  add,
  queryAllByPage,
  deleteByOne,
  editById
}
