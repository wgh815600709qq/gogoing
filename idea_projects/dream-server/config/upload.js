var multer = require('multer')
var path = require('path')
var storage = multer.diskStorage({
  destination: function (req, file, cb) { // 设置上传后文件路径，uploads文件夹会自动创建。
    cb(null, path.resolve(__dirname, '../../static/uploads/'))
  },
  filename: function (req, file, cb) { // 给上传文件重命名，获取添加后缀名
    var fileFormat = (file.originalname).split('.')
    cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1])
  }
})

var upload = multer({
  storage: storage
// limits: {}
}).single('file')
module.exports = upload
