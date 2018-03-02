import Pool from './base/recycle.js'

let instance

/**
 * 全局状态管理器
 */
export default class DataBus {
  constructor() {
    if ( instance )
      return instance

    instance = this

    this.pool = new Pool()

    this.reset()
  }

  reset() {
    this.frame      = 0
    this.score      = 0
    this.foods     = []
    this.animations = []
    this.eatApple = false
    this.gameOver   = false
    this.gameParse = false // 是否暂停
  }
  isSameObject(a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
  }
  /**
   * 回收食物，进入对象池
   * 此后不进入帧循环
   */
  removeFood(food) {
    var index = this.foods.findIndex((item) => {
      return this.isSameObject(item, food)
    })
    let temp = this.foods.splice(index, 1)[0]

    temp.visible = false

    this.pool.recover('foods', food)
  }
}
