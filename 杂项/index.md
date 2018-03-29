# 纯函数的特点

```

1、不得改写参数

2、不能调用系统 I/O 的API

3、不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果

```

# 解析React发展历史与优化文章
[链接](http://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651227848&idx=1&sn=536dcf60dd2d9df86d4092bd4c2cef9e&chksm=bd495f4c8a3ed65af05a1624ea14de8712afa3c22298965744e27871d5b6665f57c5a6b3dcf2&mpshare=1&scene=23&srcid=0227GgxfKZvSFM39mIvEsqRf#rd)
```
 Diff算法、JSX、DOM更新（版本控制)等
```





# 面向对象

##  创建对象

```
 1、组合构造函数模式和原型模式

 function Person (name, age, job) {
    this.name = name
    this.age = age
    this.job = job
 }
 Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name)
    }
 }

2、动态原型
 function Person (name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    if (typeof this.sayName !== 'function') { // 仅在初次调用构造函数执行
        Person.prototype.sayName =  function(){
            console.log(this.name)
        }
    }
 }

```

##  继承
```
组合继承
function Person(name) {
    this.name = name
    this.age = 'under 200'
}
Person.prototype.sayName = function() {
    console.log(this.name)
}

function Children (name) {
    Person.call(this, name) // 1、继承属性
    this.height = 'below 100cm'
}
Children.prototype = new Person() // 2、继承方法
Children.prototype.constructor = Children // 3、改指向

```

# 闭包
```
1、概念: 有权访问另一个函数作用域中的变量的函数
2、常见方式： A函数内部嵌套B函数,B函数包含A函数作用域的变量
3、核心理解：作用域链，明确当闭包函数执行时候，该作用域下的变量的最终值究竟是什么
example1:易错

function A() {
    var arr = []
    for(var i=0; i<10; i++) {
        arr[i] = function () {
            return i
        }
    }
    return arr
}

explain：
此函数返回的是函数数组，当函数真正执行时候，对应的作用域链的i值为循环完毕后的值

example2:利用闭包

version1:易懂

function counter () {
    var count = 0
    return function () {
        return ++count
    }
}
var a = counter()
/*
    ƒ () {
            return ++count
        }
*/

a()
a()

version2:
var counter =(function(){
    var count = 0
    return function () {
        return ++count
    }
})()
```


# git 一些操作

```

	git branch -r // 获取远程分支

	git branch 	  // 查看本地分支

	git checkout -b [本地名] [origin/远程名] // 切换分支

```


# ssh 上传远程(git bash)

```
    ssh [账户名]@[地址]

```



# AMD　＆＆ CMD
```

    AMD: Asynchronous Module Definition // 异步模块定义

    一个在浏览器端模块化开发的规范, 是 RequireJS 在推广过程中对模块定义的规范化的产出

    RequireJS主要解决两个问题:

    1、多个js文件可能有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器

    2、js加载的时候浏览器会停止页面渲染，加载文件越多，页面失去响应时间越长

    requireJS定义了一个函数 define，它是全局变量，用来定义模块
    ------------------------------------------------------------------

    CMD: Common Module Definition // 通用模块定义
    SeaJS

    CMD推崇

    一个文件一个模块，所以经常就用文件名作为模块id

    CMD推崇依赖就近，所以一般不在define的参数中写依赖，在factory中写
    factory是一个函数，有三个参数，function(require, exports, module)
    require 是一个方法，接受 模块标识 作为唯一参数，用来获取其他模块提供的接口：require(id)
    exports 是一个对象，用来向外提供模块接口
    module 是一个对象，上面存储了与当前模块相关联的一些属性和方法


    NodeJS是CommonJS规范的实现，webpack 也是以CommonJS的形式来书写

    Browserify 是目前最常用的 CommonJS 格式转换的工具

    CommonJS是主要为了JS在后端的表现制定的，他是不适合前端的，AMD(异步模块定义)出现了，它就主要为前端JS的表现制定规范。
    [文章](http://blog.csdn.net/Vin1992/article/details/60870040)
```


```
    underscore.js、 backbone.js、 require.js、 sea.js
```


## 找出0至x数内的质数与合数(算法)
```

     function getPrimeNumber(end) {
      var primeArr = [1, 2, 3] // 质数
      var comArr = [] // 合数
      for (var i = 4; i <= end; i++) {
        primeArr.forEach((item,index) => {
          if (index > 0) { // 从非1开始筛选
            if (i % item == 0) {
              if (comArr.findIndex((it)=> {return it === i}) == -1) {// 非重复则插入
                comArr.push(i)
              }
            }
          }
        })
        var isExist = comArr.findIndex((it)=> {
          return it === i
        }) > -1
        if (!isExist) {
          primeArr.push(i)
        }
      }
      console.log('primeArr', primeArr)
      console.log('comArr', comArr)
     }
     getPrimeNumber(100)

```


## gka 
```

    gka 是一款简单的、高效的帧动画生成工具。
    通过对图片集进行处理，一键式生成序列帧动画文件，并内置相关优化。
    一键式 : 图片文件批量序列化重命名，生成帧动画文件，支持预览
    性能佳 : 支持合图模式✓，相同帧图片复用✓，图片空白裁剪✓，图片压缩✓
    GitHub 地址：https://github.com/joeyguo/gka

```