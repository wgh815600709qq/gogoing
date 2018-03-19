var { connection, Sequelize } = require('../database/connect.js')
const fileModel = require('../schema/upload_files.js')
var File = fileModel(connection, Sequelize)

async function queryByOne (data) { // 根据单条数据查询
  let res = await File.findOne({
    where: data
  })
  return res
}

async function add (data) { // 新增
  let res = await File.create(data)
  return res
}

async function deleteByOne (data) { // 根据单条数据删除
  let res = await File.destroy({
    where: data
  })
  return res
}

async function editById (id, data) { // 根据id改
  let res = await File.update(data, {
    where: {id: id}
  })
  return res
}

export {
  add,
  queryByOne,
  deleteByOne,
  editById
}
