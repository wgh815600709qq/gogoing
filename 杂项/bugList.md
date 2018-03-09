## Ng1.x


```
	1、$watch(watchExpression, listener, objectEquality)
        每个参数的说明如下：
          watchExpression：监听的对象，它可以是一个angular表达式如'name',或函数如function(){return $scope.name}。

          listener:当watchExpression变化时会被调用的函数或者表达式,它接收3个参数：newValue(新值), oldValue(旧值), scope(作用域的引用)

          objectEquality：是否深度监听，如果设置为true,它告诉Angular检查所监控的对象中每一个属性的变化.如果你希望监控数组的个别元素或者对象的属性而不是一个普通的值, 那么你应该使用它。

          // 监控某个函数、监控某个对象中的某个属性，深度监听、监控变量

    2、$apply()

        2.1、$apply 方法作用：Scope提供$apply方法传播Model的变化

        2.2、$apply方法使用情景：AngularJS 外部的控制器（DOM 事件、外部的回调函数如 jQuery UI 空间等）调用了 AngularJS 函数之后，必须调用$apply。在这种情况下，你需要命令 AngularJS 刷新自已（模型、视图等） ，$apply 就是用来做这件事情的。

        2.3、$apply方法注意事项：只要可以，请把要执行的代码和函数传递给$apply去执行，而不要自已执行那些函数然后再调用$apply

```


## vue一种解决同端多账号登陆问题

```

    在axios 请求前拦截,用localstorage里面的token与vuex的token对比，出现不一致的情况，重新登陆

```