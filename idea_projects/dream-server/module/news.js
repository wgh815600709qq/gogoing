var { connection, Sequelize } = require('../database/connect.js')
const newsModel = require('../schema/news.js')
const newsClassifyModel = require('../schema/news_classify.js')
var News = newsModel(connection, Sequelize)
var NewsClassify = newsClassifyModel(connection, Sequelize)
NewsClassify.hasMany(News, {foreignKey: 'classify_id'})
News.belongsTo(NewsClassify, {foreignKey: 'classify_id'})

async function queryAll (data) { // 查所有
  let limit = +data.pageSize
  let offset = (+data.currentPage - 1) * limit
  let res = await News.findAndCount({
    include: [
      { model: NewsClassify, required: true }
    ],
    limit: limit,
    offset: offset
  })
  return res
}

async function queryByOne (data) { // 根据单条数据查询
  let limit = +data.pageSize
  let offset = (+data.currentPage - 1) * limit
  let res
  if (+data.classify_id === 0) {
    res = await queryAll(data)
  } else {
    delete data.pageSize
    delete data.currentPage
    res = await News.findAndCount({
      include: [
        { model: NewsClassify, required: true }
      ],
      limit: limit,
      offset: offset,
      where: data
    })
  }
  return res
}

async function add (data) { // 新增
  let res = await News.create(data)
  return res
}

async function deleteByOne (data) { // 根据单条数据删除(软)
  let res = await News.destroy({
    where: data
  })
  return res
}

async function editById (id, data) { // 根据id改
  let res = await News.update(data, {
    where: {id: id}
  })
  return res
}

async function apiQuery () { // 获取新闻[置顶排序]
  let res = await News.findAll({
    order: [
      ['is_top', 'DESC']
    ]
  })
  return res
}

async function apiQueryByClassify (data) { // 根据分类获取新闻[置顶排序、限制个数、翻页]
  let res
  let limit = (data.limit && +data.limit) || 10
  let offset = (data.currentPage && (+data.currentPage - 1) * limit) || 0
  delete data.limit
  if (data.currentPage) {
    delete data.currentPage
  }
  if (data.classify_id > 0) {
    res = await News.findAndCount({
      order: [
        ['is_top', 'DESC']
      ],
      include: [
        { model: NewsClassify, required: true }
      ],
      where: data,
      limit: +limit,
      offset: offset
    })
  } else {
    res = await News.findAndCount({
      order: [
        ['is_top', 'DESC']
      ],
      include: [
        { model: NewsClassify, required: true }
      ],
      limit: +limit,
      offset: offset
    })
  }
  return res
}
export {
  apiQuery,
  apiQueryByClassify,
  queryAll,
  add,
  queryByOne,
  deleteByOne,
  editById
}
