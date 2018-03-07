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