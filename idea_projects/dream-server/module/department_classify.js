var { connection, Sequelize } = require('../database/connect.js')
const departmentClassifyModel = require('../schema/department_classify.js')
var DepartmentClassify = departmentClassifyModel(connection, Sequelize)

async function queryAll () { // 查所有
  let res = await DepartmentClassify.findAll()
  return res
}

async function queryByOne (data) { // 根据单条数据查询
  let res = await DepartmentClassify.findOne({
    where: data
  })
  return res
}

async function add (data) { // 新增
  let res = await DepartmentClassify.create(data)
  return res
}

async function deleteByOne (data) { // 根据单条数据删除(软)
  let res = await DepartmentClassify.destroy({
    where: data
  })
  return res
}

async function editById (id, data) { // 根据id改
  let res = await DepartmentClassify.update(data, {
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
