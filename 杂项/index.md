# 纯函数的特点

```

1、不得改写参数

2、不能调用系统 I/O 的API

3、不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果

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


# 匿名函数 【http://www.jb51.net/article/57406.htm】