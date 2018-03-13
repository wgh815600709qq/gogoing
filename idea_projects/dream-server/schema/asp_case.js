module.exports = function (sequelize, DataTypes) {
  return sequelize.define('AspCase', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // 是否允许为NULL
      primaryKey: true, // 主键
      autoIncrement: true // 是否自增
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false// 是否允许为NULL
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileurl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    content: {
      type: DataTypes.TEXT,
      defaultValue: ''
    },
    is_top: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'asp_case',
    paranoid: true // 软删除
  })
}
