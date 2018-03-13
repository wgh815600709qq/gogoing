module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Picture', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // 是否允许为NULL
      primaryKey: true, // 主键
      autoIncrement: true // 是否自增
    },
    _path: {
      type: DataTypes.TEXT,
      allowNull: false// 是否允许为NULL
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1, // 默认上架
      allowNull: false// 是否允许为NULL
    },
    is_top: {
      type: DataTypes.INTEGER,
      defaultValue: 0, // 默认不置顶
      allowNull: false// 是否允许为NULL
    },
    is_carousel: {
      type: DataTypes.INTEGER,
      defaultValue: 0, // 默认不置顶
      allowNull: false// 是否允许为NULL
    },
    link_url: {
      type: DataTypes.TEXT
    },
    sort_no: {
      type: DataTypes.INTEGER,
      defaultValue: 0, // 默认不置顶
      allowNull: false// 是否允许为NULL
    },
    name: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'picture',
    paranoid: false // 硬删除
  })
}
