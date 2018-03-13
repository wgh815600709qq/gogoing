module.exports = function (sequelize, DataTypes) {
  return sequelize.define('CompanyHistory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // 是否允许为NULL
      primaryKey: true, // 主键
      autoIncrement: true // 是否自增
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false// 是否允许为NULL
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'company_history',
    paranoid: true // 软删除
  })
}
