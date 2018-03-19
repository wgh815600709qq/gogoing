var { connection, Sequelize } = require('../database/connect.js')
const msgModel = require('../schema/leave_msg.js')
var Msg = msgModel(connection, Sequelize)

async function queryAll (data) { // 查所有
  let limit = data.pageSize ? +data.pageSize : 10
  let offset = data.currentPage ? (+data.currentPage - 1) * limit : 0
  let res = await Msg.findAndCount({
    limit: limit,
    offset: offset
  })
  return res
}

async function queryByOne (data) { // 根据单条数据查询
  let res = await Msg.findOne({
    where: data
  })
  return res
}

async function add (data) { // 新增
  let res = await Msg.create(data)
  return res
}

async function deleteByOne (data) { // 根据单条数据删除(软)
  let res = await Msg.destroy({
    where: data
  })
  return res
}

async function editById (id, data) { // 根据id改
  let res = await Msg.update(data, {
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
