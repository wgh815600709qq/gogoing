module.exports = function (sequelize, DataTypes) {
  return sequelize.define('News', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // 是否允许为NULL
      primaryKey: true, // 主键
      autoIncrement: true // 是否自增
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false// 是否允许为NULL
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false// 是否允许为NULL
    },
    is_top: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false// 是否允许为NULL
    },
    classify_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'news',
    paranoid: true // 软删除
  })
}
