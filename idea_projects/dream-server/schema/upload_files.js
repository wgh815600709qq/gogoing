module.exports = function (sequelize, DataTypes) {
  return sequelize.define('File', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // 是否允许为NULL
      primaryKey: true, // 主键
      autoIncrement: true // 是否自增
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: false// 是否允许为NULL
    },
    primary_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'upload_files',
    paranoid: false // 硬删除
  })
}
