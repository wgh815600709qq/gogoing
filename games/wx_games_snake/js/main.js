import Snake     from './snake/snake'
import Food      from './food/food'
import BackGround from './runtime/background'
import GameInfo   from './runtime/gameinfo'
import Music      from './runtime/music'
import DataBus    from './databus'

let ctx   = canvas.getContext('2d')
let databus = new DataBus()

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    this.restart()
  }

  restart() {
    databus.reset()

    canvas.removeEventListener(
      'touchstart',
      this.touchHandler
    )

    this.bg       = new BackGround(ctx)
    this.snake   = new Snake(ctx)
    this.gameinfo = new GameInfo()
    this.music    = new Music()

    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }

  /**
   * 随着帧数变化的食物生成逻辑
   * 帧数取模定义成生成的频率
   */
  foodGenerate() {
    let food = databus.pool.getItemByClass('food', Food)
    food.init(6)
    databus.foods.push(food)
  }

  // 全局碰撞检测
  collisionDetection() {
    let that = this
    //  遍历检测
    for ( let i = 0, il = databus.foods.length; i < il;i++ ) {
      let food = databus.foods[i]

      if ( this.snake.isCollideWith(food) ) {
        databus.eatApple = true
        databus.removeFood(food)
        break
      }
    }
  }

  //游戏结束后的触摸事件处理逻辑
  touchEventHandler(e) {
     e.preventDefault()

    let x = e.touches[0].clientX
    let y = e.touches[0].clientY

    let area = this.gameinfo.btnArea

    if (   x >= area.startX
        && x <= area.endX
        && y >= area.startY
        && y <= area.endY  )
      this.restart()
    }

    /**
     * canvas重绘函数
     * 每一帧重新绘制所有的需要展示的元素
     */
  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.bg.render(ctx)

    databus.foods.forEach((item) => {
      item.drawToCanvas(ctx)
    })

    this.snake.drawToCanvas(ctx)

    databus.animations.forEach((ani) => {
      if ( ani.isPlaying ) {
        ani.aniRender(ctx)
      }
    })

    this.gameinfo.renderGameScore(ctx, databus.score)
  }

  // 游戏逻辑更新主函数
  update() {
    this.bg.update()

    this.foodGenerate()

    this.collisionDetection()
  }

  // 实现游戏帧循环
  loop() {
    databus.frame++

    this.update()
    this.render()

    // 游戏结束停止帧循环
    if ( databus.gameOver ) {
      this.gameinfo.renderGameOver(ctx, databus.score)

      this.touchHandler = this.touchEventHandler.bind(this)
      canvas.addEventListener('touchstart', this.touchHandler)

      return
    }

    if (databus.eatApple) {
      ++databus.score
      this.gameinfo.renderGameScore(ctx, databus.score)
    }

    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }
}
