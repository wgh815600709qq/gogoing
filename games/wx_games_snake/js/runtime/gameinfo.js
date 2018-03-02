const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

let atlas = new Image()
atlas.src = 'images/Common.png'

export default class GameInfo {

  renderGameScore(ctx, score) {
    ctx.fillStyle = "#ffffff"
    ctx.font      = "20px Arial"

    ctx.fillText(
      '得分:' + score,
      10,
      30
    )
  }

  renderGameOver(ctx, score) {
    ctx.drawImage(atlas, 0, 0, 119, 108, screenWidth / 2 - 150, screenHeight / 2 - 100, 300, 300)

    ctx.fillStyle = "#ffffff"
    ctx.font    = "20px Arial"

    ctx.fillText(
      '游戏结束',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 50
    )

    ctx.fillText(
      '得分: ' + score,
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 130
    )

    ctx.drawImage(
      atlas,
      120, 6, 39, 24,
      screenWidth / 2 - 60,
      screenHeight / 2 - 100 + 180,
      120, 40
    )

    ctx.fillText(
      '重新开始',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 205
    )

    /**
     * 重新开始按钮区域
     * 方便简易判断按钮点击
     */
    this.btnArea = {
      startX: screenWidth / 2 - 40,
      startY: screenHeight / 2 - 100 + 180,
      endX  : screenWidth / 2  + 50,
      endY  : screenHeight / 2 - 100 + 255
    }
  }
  renderGamePauseBtn (ctx) {
    ctx.fillStyle = "#fffff"
    ctx.font      = "20px Arial"
    ctx.fillText(
      '≥暂停',
      170,
      30
    )
    this.parseArea = {
      startX: 150,
      startY: 20,
      endX  : 200,
      endY  : 40
    }
  }
  // 渲染暂停弹窗提示
  renderGameParsePopUp(ctx) {
    ctx.drawImage(atlas, 0, 0, 119, 108, screenWidth / 2 - 150, screenHeight / 2 - 100, 300, 300)
    ctx.fillStyle = "#ffffff"
    ctx.font    = "20px Arial"
    ctx.fillText(
      '暂停结束',
      170,
      380
    )
    ctx.fillText(
      '游戏暂停',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 205
    )
    this.restartArea = {
      startX: 100,
      startY: 360,
      endX  : 300,
      endY  : 400
    }
  }
}

