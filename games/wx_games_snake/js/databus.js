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
  }

  /**
   * 回收食物，进入对象池
   * 此后不进入帧循环
   */
  removeFood(food) {
    let temp = this.foods.shift()

    temp.visible = false

    this.pool.recover('foods', food)
  }
}
