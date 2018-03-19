var { connection, Sequelize } = require('../database/connect.js')
const pictureModel = require('../schema/picture.js')
var Picture = pictureModel(connection, Sequelize)

async function queryAllCarousel (data) { // 查所有
  let limit = +data.pageSize
  let offset = (+data.currentPage - 1) * limit
  let res = await Picture.findAndCount({
    limit: limit,
    offset: offset,
    order: [
      ['sort_no', 'ASC']
    ],
    where: {is_carousel: 1} // 只查找是轮播图
  })
  return res
}

async function queryByOne (data) { // 根据单条数据查询
  let res = await Picture.findOne({
    where: data
  })
  return res
}

async function add (data) { // 新增
  let res = await Picture.create(data)
  return res
}

async function deleteByOne (data) { // 根据单条数据删除(软)
  let res = await Picture.destroy({
    where: data
  })
  return res
}

async function editById (id, data) { // 根据id改
  console.log('````data', data)
  let res = await Picture.update(data, {
    where: {id: id}
  })
  return res
}

async function apiQuery (data) { // 返回客户端展示轮播图[排序、上架]
  let res = await Picture.findAll({
    order: [
      ['sort_no', 'ASC']
    ],
    where: {
      is_carousel: 1,
      status: 1
    }
  })
  return res
}

export {
  apiQuery,
  queryAllCarousel,
  add,
  queryByOne,
  deleteByOne,
  editById
}
