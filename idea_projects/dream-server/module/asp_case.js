var { connection, Sequelize } = require('../database/connect.js')
const aspCaseModel = require('../schema/asp_case.js')
const DepartmentModel = require('../schema/department_classify.js')
var AspCase = aspCaseModel(connection, Sequelize)
var Department = DepartmentModel(connection, Sequelize)
Department.hasMany(AspCase, {foreignKey: 'department_id'})
AspCase.belongsTo(Department, {foreignKey: 'department_id'})

async function queryAllByPage (data) { // 查所有
  let limit = +data.pageSize
  let offset = (+data.currentPage - 1) * limit
  let res = await AspCase.findAndCount({
    include: [
      { model: Department, required: true }
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
  if (+data.department_id === 0) {
    res = await queryAllByPage(data)
  } else {
    delete data.currentPage
    delete data.pageSize
    res = await AspCase.findAndCount({
      include: [
        { model: Department, required: true }
      ],
      where: data,
      limit: limit,
      offset: offset
    })
  }
  return res
}

async function add (data) { // 新增
  let res = await AspCase.create(data)
  return res
}

async function deleteByOne (data) { // 根据单条数据删除(软)
  let res = await AspCase.destroy({
    where: data
  })
  return res
}

async function editById (id, data) { // 根据id改
  let res = await AspCase.update(data, {
    where: {id: id}
  })
  return res
}

async function apiQuery (data) {
  let res
  let limit = (data.limit && +data.limit) || 10
  let offset = (data.currentPage && (+data.currentPage - 1) * limit) || 0
  if (+data.department_id > 0) {
    res = await AspCase.findAndCount({
      where: {department_id: data.department_id, status: 1}, // 筛选指定部门而且上架项
      offset: offset,
      limit: limit
    })
  } else {
    let obj
    if (data.is_top) { // 是否需要根据置顶筛选
      obj = { status: 1, is_top: 1 }
    } else {
      obj = { status: 1 }
    }
    res = await AspCase.findAndCount({
      where: obj, // 筛选置顶而且上架项
      offset: offset,
      limit: limit
    })
  }
  return res
}

export {
  apiQuery,
  queryAllByPage,
  add,
  queryByOne,
  deleteByOne,
  editById
}
