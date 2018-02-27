# 一种构建工具函数的简单思路

```

(function(){
  function Utils () {
    Object.defineProperties(this, { // 底层不可修改的值
      version: {
        value: 'v1.0.0',
        configurable: false,
        writable: false,
        enumable: false
      },
      author: {
        value: 'johnson',
        configurable: false,
        writable: false,
        enumable: false
      }
    })
  }
  Utils.prototype = {
    constructor: Utils,
    showVersion:  function () {
      return this.version
    },
    isToday: function (time) {
      return new Date(time).toDateString() === new Date().toDateString()
    }
  }
  // 继承
  function Instance () {
    Utils.call(this) // 继承属性
    this.uid = +new Date() // 私有属性
  }
  Instance.prototype = new Utils() // 继承方法
  Instance.prototype.constuctor = Instance // 修改构造链指针
  // 挂靠在全局变量下
  if (typeof window === 'object') {
    window.__utils = (function () {
      return new Instance()
    })()
  } else {
    global.__utils = (function () {
      return new Instance()
    })()
  }
})();

```