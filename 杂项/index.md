# 纯函数的特点

```

1、不得改写参数

2、不能调用系统 I/O 的API

3、不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果

```

# 解析React发展历史与优化文章
```
 Diff算法、JSX、DOM更新（版本控制)等
```

[链接](http://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651227848&idx=1&sn=536dcf60dd2d9df86d4092bd4c2cef9e&chksm=bd495f4c8a3ed65af05a1624ea14de8712afa3c22298965744e27871d5b6665f57c5a6b3dcf2&mpshare=1&scene=23&srcid=0227GgxfKZvSFM39mIvEsqRf#rd)



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

