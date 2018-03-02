import Animation from '../base/animate.js'
import DataBus   from '../databus'

const ENEMY_IMG_SRC_1 = 'images/food_1.png'
const ENEMY_IMG_SRC_2 = 'images/food_2.png'
const ENEMY_IMG_SRC_3 = 'images/food_3.png'
const ENEMY_IMG_SRC_4 = 'images/food_4.png'
const ENEMY_WIDTH   = 60
const ENEMY_HEIGHT  = 60

const __ = {
  speed: Symbol('speed')
}

let databus = new DataBus()

function rnd(start, end){
  return Math.floor(Math.random() * (end - start) + start)
}

export default class Food extends Animation {
  constructor() {
    var num = rnd(1,5)
    var url
    if (num === 1) {
      url = ENEMY_IMG_SRC_1
    } else if (num === 2)  {
      url = ENEMY_IMG_SRC_2
    } else if (num === 3) {
      url = ENEMY_IMG_SRC_3
    } else if(num === 4) {
      url = ENEMY_IMG_SRC_4
    }
    super(url, ENEMY_WIDTH, ENEMY_HEIGHT)

    // this.initExplosionAnimation()
    this.initEatenAnimation()
  }

  init(speed) {
    this.x = rnd(0, window.innerWidth - ENEMY_WIDTH)
    this.y = rnd(0, window.innerHeight - ENEMY_HEIGHT)

    this[__.speed] = speed

    this.visible = true
  }
  // 预定义被蛇吃掉的帧动画
  initEatenAnimation () {
    let frames = []
    // 被吃的动画
    this.initFrames(frames)
  }
  // // 预定义爆炸的帧动画
  // initExplosionAnimation() {
  //   let frames = []

  //   const EXPLO_IMG_PREFIX  = 'images/explosion'
  //   const EXPLO_FRAME_COUNT = 19

  //   for ( let i = 0;i < EXPLO_FRAME_COUNT;i++ ) {
  //     frames.push(EXPLO_IMG_PREFIX + (i + 1) + '.png')
  //   }

  //   this.initFrames(frames)
  // }

  // 每一帧更新子弹位置
  // update() {
  //   this.y += this[__.speed]

  //   // 对象回收
  //   if ( this.y > window.innerHeight + this.height )
  //     databus.removeEnemey(this)
  // }
}
