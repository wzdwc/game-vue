export default class Runner {
    constructor(documentId, runway, limitTime, maxV, person, theEndShape, winW, winH, total, runV, shapes, animationV, downV) {
        this.runway = runway
        this.maxV = maxV
        this.winW = winW
        this.winH = winH
        this.total = total
        this.downV = downV
        this.runV = runV
        this.limitTime = limitTime
        this.limitTimeInterVal = null
        this.animationV = animationV
        this.shapes = shapes
        this.downVSetTime = null
        this.isPlay = false
        this.showTime = false
        this.showReady = false
        this.runMetres = 0
        this.ready123 = 1
        this.canvas = document.getElementById(documentId)
        this.cxt = this.canvas.get(0).getContext('2d')              // 注意：循环引用
        this.person = person | {}
        this.theEndShape = theEndShape | {}
    }

    playAnimation(isInit) {
        let canvas = this.cxt.canvas
        this.cxt.clearRect(0, 0, canvas.width, canvas.height)
        // 遍历画布元素，添加到画布中
        this.shapes.forEach(item => item.draw(this.cxt))
        if (!isInit && this.playAnimation) {
            setTimeout(() => {
                this.playAnimation(false, this.cxt)
            }, 166.66 / this.animationV)
        }
    }

    levelUp() {

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
        // if (this.data.sender) {
        //     this.total = parseInt(this.data.total) + parseInt(this.runMetres)
        // }
        // else {
        //     this.total = parseInt(this.runMetres) > parseInt(this.data.total) ? parseInt(this.runMetres) : parseInt(this.data.total)
        // }
        // var prize = prizelist[this.level - 1]
        // var surplusM = parseInt(prize.distanc) - parseInt(this.total)
        // var level = this.data.sender ? this.data.sender.level : 1
        //
        // if (surplusM <= 0) {
        //     this.level = parseInt(parseInt(this.total) / 100) + 1
        //     prize = this.level > 13 ? prizelist[12] : prizelist[this.level - 2]
        //     surplusM = parseInt(prize.distanc) - parseInt(this.total)
        //     //if(prize.level>=4){
        //     //    $(".surprise").html("哇喔！魔鬼的指法！");
        //     //    $(".prize-img").attr("src","images/prize2.jpg")
        //     //}
        //     var prize_msg = '恭喜你,到达<span class="city"></span>'
        //     if (this.sender) {
        //         prize_msg = '恭喜你帮<span class="name">name</span>到达<span class="city"></span>'
        //     }
        //     $('.prize-msg').html(prize_msg)
        //     $('.prizelist').show()
        //     this.levelUp = true
        // }
        // else {
        //     if (this.data.friends.length == 0) {
        //         $('.surplusM').html(prize.distanc)
        //     }
        // }
        // this.level > 13 ? $('.levelCount').html(parseInt(14 - level)) : $('.levelCount').html(parseInt(this.level - level))
        // $('.city').html(prize.city)
        // $('.prize-desc').html(prize.desc)
        // $('.surplusM').html(surplusM)
        //
        // $('.game .title .time').addClass('move')
        // $('.game .title .result').addClass('moveL')
        // $('#myMetres').html(this.total)
        // $('#runway li:first-child .head-photo p').html(this.runMetres + 'm')
        // 添加用户
        // addUser()
        document.getElementById('audioShaking').pause()
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

    }

    autoDeceleration() {
        if (this.animationV > 4) {
            this.animationV -= 1
        }
        if (this.runV > 8) {
            this.runV -= 1
        }
        this.downVSetTime = setTimeout(this.downV, 1000)
    }

    init() {
        this.winW = window.innerWidth
        this.winH = window.innerHeight
        this.imgAddress = ['images/persons.png', 'images/tree.png', 'images/ready.png', 'images/game-bg.jpg', 'images/theEnd.png', 'images/msg-bg.png', 'images/prizelist-bg.jpg']
        person = new Shap((this.winW - 125) / 2, (this.winH - 125) / 2, 111, 275, 1, this.imgAddress[0], 0, 0, 162, 400, 162, p_movement)
        runway = new Shap(0, 0, this.winW, this.winH, 1, this.imgAddress[1], 0, 0, 640, 960, 640, runway_movement)
        bg = new Shap(0, 0, this.winW, this.winH, 1, this.imgAddress[3], 0, 0, 640, 960, 0, p_movement)
        this.ready = new Shap((this.winW - 175) / 2, (this.winH - 75) / 2, 175, 323, 1, this.imgAddress[2], 0, 0, 246, 455, 0, p_movement)
        this.theEnd = new Shap((this.winW - 175) / 2, (this.winH - 75) / 2, 175, 356, 1, this.imgAddress[4], 0, 0, 279, 568, 0, p_movement)
        cxt.fillStyle = 'rgb(0,0,0)'
        this.time_15 = 100
        this.animate_v = 2
        this.runV = 10
        this.maxV = 8
        this.ready123 = 1
        this.shaps.push(bg)
        this.shaps.push(runway)
        this.shaps.push(this.ready)
        canvas.attr('width', this.winW)
        canvas.attr('height', this.winH)
        $('#button i').show()
        $('#ready').show()
        $('.game .title .result').removeClass('moveL')
        $('.game .title .time').removeClass('move')
        $('.game .title .time').hide()
        $('#metres').html('0')
        $('#time').html('15.0s')
        $('.runway-body').hide()
        $('.game').show()
        startButton.show()
        //加载页面，加载运动图片加载完毕执行下一步
        loading(function () {
            $('.loading').fadeOut(300)
            clearTimeout(this.setLoadTime)
            animate(true, cxt)
        }, this.imgAddress)
    }
}
