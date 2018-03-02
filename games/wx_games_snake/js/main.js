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
    this.time = null
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
    this.music.playBgm()
    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }
  gameParse() {
    databus.gameParse = true
    this.gameinfo.renderGameParsePopUp(ctx)
    this.music.stopBgm()
  }
  /**
   * 随着帧数变化的食物生成逻辑
   * 帧数取模定义成生成的频率
   */
  foodGenerate() {
    if (this.time && (new Date() - this.time) < 1000) {
      return
    }
    let food = databus.pool.getItemByClass('food', Food)
    food.init()
    databus.foods.push(food)
    this.time = new Date()
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
    // 重新开始事件监听
    if (area) {
      if (   x >= area.startX
          && x <= area.endX
          && y >= area.startY
          && y <= area.endY  ) {
        this.restart()
      }
    }


    let areaParse = this.gameinfo.parseArea
    if (areaParse) {
      if (   x >= areaParse.startX
          && x <= areaParse.endX
          && y >= areaParse.startY
          && y <= areaParse.endY  ) {
              console.log('点到暂停了')
              this.gameParse()
          }
    }

    let restartArea = this.gameinfo.restartArea
    if (restartArea) {
      if (   x >= restartArea.startX
          && x <= restartArea.endX
          && y >= restartArea.startY
          && y <= restartArea.endY  ) {
              console.log('恢复')
              databus.gameParse = false
              // 记录分数，蛇位置、食物等重绘
              this.render()
              this.update()
              window.requestAnimationFrame(
                this.loop.bind(this),
                canvas
              )
          }
    }
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
    this.gameinfo.renderGamePauseBtn(ctx)
  }

  // 游戏逻辑更新主函数
  update() {
    this.bg.update()

    this.foodGenerate()

    this.collisionDetection()
  }

  // 实现游戏帧循环
  loop() {
    if (databus.gameParse) return
    databus.frame++

    this.update()
    this.render()
    this.touchHandler = this.touchEventHandler.bind(this)
    canvas.addEventListener('touchstart', this.touchHandler)
    // 游戏结束停止帧循环
    if ( databus.gameOver ) {
      this.gameinfo.renderGameOver(ctx, databus.score)
      this.music.stopBgm()
      this.touchHandler = this.touchEventHandler.bind(this)
      canvas.addEventListener('touchstart', this.touchHandler)

      return
    }
    if (databus.foods.length > 10) {
      databus.gameOver = true
      this.music.stopBgm()
      this.gameinfo.renderGameOver(ctx, databus.score)

      this.touchHandler = this.touchEventHandler.bind(this)

      return
    }
    if (databus.eatApple) {
      ++databus.score
      this.music.playBoom()
      databus.eatApple = false
      this.gameinfo.renderGameScore(ctx, databus.score)
    }
    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }
}
