<template>
  <div id="trailing-effect-wrap">
    <canvas id="trailing-effect-canvas" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
export default {
  name: 'trailing-effect',
  data () {
    return {
      ctx: {},
      width: 800,
      height: 600,
      parts: [],
      text: ['love', 'for', 'you', '小', '一', '弛'],
      textSize: 30,
      glowSize: 20,
      trailSize: 0.9,
      minTime: 3000,
      maxTime: 10000,
      batchCount: 1, // 同时刷新出来一批的数量
      limitCount: 100,
      pullRadius: 100,
      pullVelocity: 7,
      mouseX: -10000,
      mouseY: -10000
    }
  },
  created () {
    this.width = window.innerWidth
    this.height = window.innerHeight
  },
  mounted () {
    let canvas = document.getElementById('trailing-effect-canvas')
    window.addEventListener('resize', () => {
      this.width = window.innerWidth
      this.height = window.innerHeight
    })
    canvas.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX
      this.mouseY = e.clientY
    })
    canvas.addEventListener('mouseleave', () => {
      this.mouseX = -this.pullRadius
      this.mouseY = -this.pullRadius
    })
    canvas.addEventListener('touchmove', (e) => {
      this.mouseX = e.changedTouches[0].pageX
      this.mouseY = e.changedTouches[0].pageY
    })
    canvas.addEventListener('touchend', (e) => {
      this.mouseX = -this.pullRadius
      this.mouseY = -this.pullRadius
    })

    this.ctx = canvas.getContext('2d')

    setInterval(this.createPart, 300)
    // setInterval(this.render, 17)
    // requestAnimationFrame(this.createPart)
    requestAnimationFrame(this.render)
  },
  methods: {
    createPart () {
      if (this.parts.length < this.limitCount) {
        for (let i = 0; i < this.batchCount; i++) {
          this.parts.push(this.getPartParam())
        }
      }
    },

    getPartParam () {
      return {
        x: Math.random() * this.width,
        y: -this.textSize,
        vx: Math.random() * 4 - 2,
        vy: Math.random() * 2 - 1,
        ts: Date.now(),
        tl: Math.random() * (this.maxTime - this.minTime) + this.minTime,
        h: Math.random() * (320 - 170) + 170,
        text: this.getDrawText()
      }
    },

    getDrawText () {
      let index = Math.floor(Math.random() * this.text.length)
      return this.text[index]
    },

    draw () {
      this.parts.forEach((part) => {
        let dif = (Date.now() - part.ts) / part.tl
        let alpha = 1 - (Math.round(dif * 100) / 100)
        let ctx = this.ctx

        ctx.beginPath()
        ctx.strokeStyle = 'hsla(0,0%,100%,' + alpha + ')'
        ctx.lineWidth = this.textSize / 4
        ctx.fillStyle = 'hsla(' + part.h + ', 100%, 50%, ' + alpha + ')'
        ctx.shadowColor = 'hsla(' + part.h + ', 100%, 50%, ' + alpha + ')'
        ctx.shadowBlur = this.glowSize
        ctx.font = 'bold ' + this.textSize + 'px sans-serif'
        // 这里坐标为什么带上textSize一起？
        ctx.strokeText(part.text, part.x - this.textSize, part.y + this.textSize / 2)
        ctx.fillText(part.text, part.x - this.textSize, part.y + this.textSize / 2)
        ctx.closePath()
      })
    },

    move () {
      this.parts.forEach((part) => {
        if (part.y + this.textSize / 2 >= this.height) {
          part.vy = -part.vy * 0.8
          part.y = this.height - this.textSize
          part.vx *= 0.8
        }
        part.vy += 0.2
        part.x += part.vx
        part.y += part.vy

        if (this.dist(part.x, part.y, this.mouseX, this.mouseY) < this.pullRadius) {
          part.vx = (this.mouseX - part.x) / this.pullVelocity
          part.vy = (this.mouseY - part.y) / this.pullVelocity
        }
      })
    },

    lifeTime () {
      this.parts.forEach((part, index) => {
        if (part.ts + part.tl < Date.now()) {
          this.parts.splice(index, 1)
        }
      })
    },

    clearCanvas () {
      this.ctx.shadowBlur = 0
      this.ctx.fillStyle = 'rgba(0, 0, 0, ' + Math.abs(this.trailSize - 1) + ')'
      this.ctx.rect(0, 0, this.width, this.height)
      this.ctx.fill()
    },

    dist (x1, y1, x2, y2) {
      let a = x1 - x2
      let b = y1 - y2
      return Math.sqrt(a * a + b * b)
    },

    render () {
      this.clearCanvas()
      this.draw()
      this.move()
      this.lifeTime()
      requestAnimationFrame(this.render)
    }
  }
}
</script>

<style scoped>
#trailing-effect-wrap {
  height: 100vh;
  overflow: hidden;
}
</style>
