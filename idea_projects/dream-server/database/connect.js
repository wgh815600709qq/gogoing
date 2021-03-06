/*
* @数据库连接文件
*/
var Sequelize = require('sequelize')
var isDev = process && process.env && process.env.npm_config_argv ? process.env.npm_config_argv.indexOf('dev') > -1 : false // 本地环境使用本地数据库
var config = isDev ? require('./dev-db-config.js') : require('./db-config.js')
const connection = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  define: {
    timestamps: true, // 自动给数据表加入时间戳（createdAt以及updatedAt）
    underscored: true // 不用驼峰命名时间字段  (created_at以及updated_at）
  },
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  },
  timezone: '+08:00' // 东八时区
})

module.exports = { connection, Sequelize }
