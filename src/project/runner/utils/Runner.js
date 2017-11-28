export default class Runner {
    constructor({document, audio, runway, bg, limitTime, maxV, person, theEndShape, winW, winH, total, runV, animationV}) {
        this.runway = runway
        this.maxV = maxV
        this.winW = winW || window.innerWidth
        this.bg = bg
        this.winH = winH || window.innerHeight
        this.total = total
        this.runV = runV
        this.limitTime = limitTime
        this.limitTimeInterVal = null
        this.animationV = animationV
        this.shapes = []
        this.downVSetTime = null
        this.isPlay = false
        this.showTime = false
        this.showReady = false
        this.showButton = false
        this.runMetres = 0
        this.ready123 = 1
        this.canvas = document
        this.audio = audio
        this.cxt = this.canvas.getContext('2d')              // 注意：循环引用
        this.person = person || {}
        this.theEndShape = theEndShape || {}
    }

    playAnimation(isInit) {
        let canvas = this.cxt.canvas
        this.cxt.clearRect(0, 0, canvas.width, canvas.height)
        // 遍历画布元素，添加到画布中
        this.shapes.forEach(item => {
            item.draw(this.cxt)
        })
        if (!isInit && this.playAnimation) {
            setTimeout(() => {
                this.playAnimation(false, this.cxt)
            }, 166.66 / this.animationV)
        }
    }
    start() {
        this.shapes[2] = this.person
        this.isPlay = true
        this.showTime = true
        this.showReady = false
        this.playAnimation(false)
        this.countDown()
    }
    calculateMetres() {
        if (this.isPlay) {
            this.runMetres += this.runV
        }
    }
    countDown() {
        if (this.limitTime < 0) {
            clearTimeout(this.limitTimeInterVal)
            stop()
            return
        }
        let s = parseInt(this.limitTime / 10)
        let ms = this.limitTime % 10
        // $('#time').html(s + '.' + ms + 's')
        console.log(`${s}.${ms}`)
        this.limitTime--
        if (this.limitTime % 10 === 0) {
            this.calculateMetres()
        }
        this.limitTimeInterVal = setTimeout(this.countDown, 100)
    }

    stop(callback) {
        this.shapes[2] = this.theEndShape
        this.isPlay = false
        this.level = this.friends.length === 0 ? 1 : this.friends.pop().level
        this.runMetres = this.runMetres < this.person.distance ? this.person.distance : this.runMetres
        this.person.distance = this.runMetres
        clearTimeout(this.limitTimeInterVal)
        clearTimeout(this.downVSetTime)
    }

    ready() {
        if (this.ready123 === 5) {
            this.ready123 = 1
            this.start(this.person, this.cxt)
            // $('.ready123 .go123').removeClass('go_4')
            return
        }
        // $('.ready123 .go123').removeClass('go_' + (setting.ready123 - 1))
        // $('.ready123 .go123').addClass('go_' + setting.ready123)
        this.ready123++
        setTimeout(() => this.ready(), 1000)
    }

    loading() {
        let imgId = 0
        let audioElement = this.audio
        let loadImg = () => {
            let imgObj = new Image()
            imgObj.src = this.imgAddress[imgId]
            imgObj.onload = () => {
                if (imgObj.complete === true) {
                    this.loadingImages.push(imgObj)
                    imgId++
                    if (imgId < this.imgAddress.length) {
                        loadImg()
                    }
                    if (imgId === this.imgAddress.length) {
                        audioElement.play()
                    }
                }
            }
        }
        console.log('audio', this.audio)
        audioElement.src = this.audio
        if (audioElement.readyState === 4) {  // android会走此逻辑
            loadImg()
            audioElement.load()    // 需要主动触发下，不然不会加载
            audioElement.pause()
        } else {    // iOS走此逻辑
            audioElement.addEventListener('canplaythrough', () => {
                loadImg()
            }, false)
            audioElement.load()    // 需要主动触发下，不然不会加载
            audioElement.pause()
        }
        audioElement.pause()
    }

    autoDeceleration() {
        if (this.animationV > 4) {
            this.animationV -= 1
        }
        if (this.runV > 8) {
            this.runV -= 1
        }
        this.downVSetTime = setTimeout(this.autoDeceleration, 1000)
    }

    init() {
        this.canvas.width = this.winW
        this.canvas.height = this.winH
        this.cxt.fillStyle = 'rgb(0,0,0)'
        this.shapes.push(this.bg)
        this.shapes.push(this.runway)
        this.showReady = true
        this.showButton = true
        this.start()
    }
}
