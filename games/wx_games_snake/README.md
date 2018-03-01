## Greedy Snaker // 贪吃蛇

## 源码目录介绍
```
./js
├── base // 定义游戏开发基础类
│   ├── animate.js // 帧动画的简易实现
│   ├── recycle.js // 对象池的简易实现
│   └── element.js // 游戏基本元素精灵类
├── libs
│   ├── symbol.js                          // ES6 Symbol简易兼容
│   └── weapp-adapter.js                   // 小游戏适配器
├── food
│   └── food.js                           // 食物类
├── snake
│   ├── snake.js                          // 蛇类
│
├── runtime
│   ├── background.js // 背景类
│   ├── gameinfo.js // 用于展示分数和结算界面
│   └── music.js // 全局音效管理器
├── databus.js // 管控游戏状态
└── main.js // 游戏入口主函数

```