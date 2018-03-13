module.exports = function (sequelize, DataTypes) {
  return sequelize.define('DepartmentClassify', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // 是否允许为NULL
      primaryKey: true, // 主键
      autoIncrement: true // 是否自增
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false// 是否允许为NULL
    }
  }, {
    tableName: 'department_classify',
    paranoid: true // 软删除
  })
}
