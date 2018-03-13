module.exports = function (sequelize, DataTypes) {
  return sequelize.define('LeaveMsg', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // 是否允许为NULL
      primaryKey: true, // 主键
      autoIncrement: true // 是否自增
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false// 是否允许为NULL
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false// 是否允许为NULL
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false// 是否允许为NULL
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'leave_msg',
    paranoid: true // 软删除
  })
}
