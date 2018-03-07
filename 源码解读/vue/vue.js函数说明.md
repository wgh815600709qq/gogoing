# Vue.js 源码


## 框架内定义功能性函数：

```

	isUndef         // 判断值是否未定义或者为空
	
	isDef           // 判断值是否已经定义
	
	isTrue          // 真值判断
	
	isFalse         // 假值判断
	
	isPrimitive     // 判断值是否为原始的（string、number、symbol、boolean）
	
	isObject        // 判断值是否未对象
	
	toRawType       // 获取值的原始类型字符串 （[object object]）
	
	isPlainObject   // 是否未普通对象
	
	isRegExp        // 是否未正则表达式
	
	isValidArrayIndex   // 是否为数组索引
	
	toString        // JSON.stringfiy()的扩展版本
	
	toNumber        // 转变为整型
	
	makeMap         // ？？？
	
	remove          // 从数组中删除一个值
	
	hasOwn          // 判断对象内是否含此键
	
	cached          // 纯函数的缓存版本[闭包]
	
	bind            // 绑定函数作用域(运行上下文环境)
	
	toArray         // 将类数组变成数组
	
	extend          // 将对象的属性扩展、覆盖到新对象上
	
	toObject        // 将(数组包对象)转变（大对象）
	
	no              // 返回false
	
	identity        // 返回本身
	
	genStaticKeys   // 从编译器模块生成静态键字符串
	
	looseEqual          // 宽松模式equal判断
	
	looseIndexOf        // 返回数组中某项的索引值
	
	once                // 只能调用一次的函数[闭包]
	
	isReserved          // 判断字符串首字母是否包含$、_
	
	def                 // (es5对对象的定义表达式)
	
	parsePath           // 解析路径
	
	isServerRendering   // 是否为服务端渲染
	
	isNative            // 判断是否为native函数

	noop				// 不执行操作、
	

```


##  vue内置

```

	classify			// ???
	
	warn				// vue 内置警告
	
	tip					// vue 内置提示

	formatComponentName	// 格式化组件名

	repeat				

	generateComponentTrace	

	VNode 				// 构造函数

```


## 框架跨平台判断

```

	var hasProto = '__proto__' in {};
	
	var inBrowser = typeof window !== 'undefined';
	
	var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
	
	var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
	
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	
	var isIE = UA && /msie|trident/.test(UA);
	
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	
	var isEdge = UA && UA.indexOf('edge/') > 0;
	
	var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
	
	var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
	
	var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

	var hasConsole = typeof console !== 'undefined';
	
	var hasSymbol =	
		typeof Symbol !== 'undefined' && isNative(Symbol) &&
		typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);
	
	
	

```




## js原生不熟悉的函数

```

	isFinite    // 是否是无穷
	
	String      // 把值变成字符串
	
	isNaN       //是否NAN
	
	reduce(function(total, currentValue,currentIndex,arr))      // 累加器
	
	        eg:
	        var s = [{a:1},{a:2},{a:3},{a:4}] 完成数值累加
	        s.reduce(function(total, cv, ci, arr){
	            return {a: total.a + cv.a}
	        })
	
	isArray        // 是否数组
	
	charCodeAt(index) 返回指定位置的字符的 Unicode 编码


```


##  js不熟悉的正则

```

	\B 非字边界匹配
	\b 匹配一个字边界
	\s 匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]
	\S 匹配任何非空白字符。等价于 [^ \f\n\r\t\v]
	\f 匹配一个换页符。等价于 \x0c 和 \cL
	\n 匹配一个换行符。等价于 \x0a 和 \cJ
	\r 匹配一个回车符。等价于 \x0d 和 \cM
	\w 匹配单词字符
	\W 匹配非单词字符
	?: 不捕获分组

```


## js不熟悉的模块


```

    Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法
[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect "Reflect对象")

```