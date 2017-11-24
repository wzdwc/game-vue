<template lang="pug">
    .runner-container
        .game
            .game-body
            .title
                .ready(id="ready")
                .ready123(id="ready123")
                    p.go123.go_1
                .time
                h2(id="time")
                    b 15.0s
                p.metres 腻害，跑了
                    span(id="metres") 84
                    | Km
                .resul
                    p.name.myName name
                    p 腻害！跑了
                        span.levelCount 城市
            canvas(id="myCanvas" width="1000" height="1000")
            .button(id="button")
                section
                    p
                        span.finger-l(:class='{active:showFingerL}',@click="touchHandle")
                        i
                    p
                        span.finger-r(:class='{active:showFingerR}',@click="touchHandle")
                        i


</template>
<style lang="less" rel="stylesheet/less" scoped>
    @import "../../../../assets/less/fn.less";

    .button {
        position: absolute;
        width: 100%;
        bottom: 0;
    }
    .button section{
        width: 100%;
        font-size: 5px;
        text-align: center;
    }
    .button section p{
        float: left;
        width: 50%;
        text-align: center;
        padding: 20px 0;
    }
    .button section .finger-l{
        background: url("/game/static/runner/fingerprint.jpg") center center no-repeat #cfcfcf;
        width: 90%;
        background-size: 40px auto;
        height: 58px;
        display: inline-block;
        border-radius: 5px;
        margin-right: 10px;
        position: relative;
    }
    .button section .finger-l.active i{
        background: url("/game/static/runner/icon-finger-l.png") no-repeat;
        width: 90%;
        height: 98px;
        background-size: 150px auto;
        position: absolute;
        left: 50%;
        top:-17px;
        margin-left: -75px;
    }
    .button section .finger-l.active{
        background: url("/game/static/runner/fingerprint_act-r.jpg") center center no-repeat #f0ff00;
        background-size: 40px auto;
    }


    .button section .finger-r{
        background: url("/game/static/runner/fingerprint-r.jpg") center center no-repeat #cfcfcf;
        width: 90%;
        background-size: 40px auto;
        height: 58px;
        display: inline-block;
        border-radius: 5px;
        margin-right: 10px;
        position: relative;
    }
    .button section .finger-r.active i{
        background: url("/game/static/runner/icon-finger-r.png") no-repeat;
        width: 90%;
        height: 98px;
        background-size: 150px auto;
        position: absolute;
        left: 50%;
        top:-17px;
        margin-left: -75px;
    }
    .button section .finger-r.active{
        background: url("/game/static/runner/fingerprint_active.jpg") center center no-repeat #f0ff00;
        background-size: 40px auto;
    }


    /*loading*/
    .loading {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        z-index: 99999;
        background: url("/game/static/runner/loading.gif") no-repeat center center;
        background-size: cover;
    }

    .loading .l-bg, .loading .l-bar {
        width: 90%;
        height: 3px;
        background: #22252b;
        position: absolute;
        top: 54%;
        left: 5%;
    }

    .loading .l-bar {
        width: 0%;
        background: #03aac9;
        left: 0;
        top: 0;
        -webkit-transition: width .5s 0;
    }

    .loading .l-bar span {
        background: url(/game/static/runner/load.png) no-repeat right center;
        width: 25px;
        height: 18px;
        display: block;
        right: -8px;
        top: -8px;
        position: absolute;
    }

    .loading .l-txt {
        position: absolute;
        text-align: center;
        top: 40%;
        width: 100%;
        font-size: 1rem;
        color: #fff;
        text-shadow: 0 3px 1px #000;
        letter-spacing: .1rem;
    }

    .loading .l-txt .l-num {
        color: #fcff00;
    }
    #myCanvas{
        vertical-align: top;
    }
    #loading{
        position: absolute;
        z-index: 999999;
        left: 50%;
        margin-left: -33px;
        top: 50%;
        margin-top: -60px;
    }
    .game .title{
        position: absolute;
        width: 320px;
        height: 50px;
        bottom: 180px;
        left: 50%;
        margin-left: -160px;
        font-family: "黑体";
    }
    .game .title .time #time{
        line-height: 70px;
        text-align: center;
        color: #e3324c;
        text-shadow:  2px 0px 0px #fff,-2px 0px 0px #fff,0px 2px 0px #fff,0px -2px 0px #fff;
        letter-spacing: 2px;
        font-size: 60px;
        font-family: arial, "宋体";
    }
    .game .title .time{
        width: 320px;
        display: none;
        position: fixed;
        left: 50%;
        margin-left: -160px;
    }
    .game .title .move{
        -webkit-transition: -webkit-transform .3s;
        -webkit-transform:translate3D(-200%,0,0);
    }
    .game .title .ready123{
        margin: auto;
        text-align: center;
        display: none;
    }
    .game .title .go123{
        background-image: url("/game/static/runner/go123.png"); display: inline-block;
        zoom:.8;
    }
    .go_3 {background-position: -0px -0px; width: 65px; height: 115px;  }
    .go_2 {background-position: -66px -0px;
        width: 94px;
        height: 115px; }
    .go_1 {background-position: -161px -0px;
        width: 94px;
        height: 115px;}
    .go_4 {  background-position: -251px -0px;
        width: 279px;
        height: 115px;}

    .game .title .result{
        background: url("/game/static/runner/result.png")no-repeat;
        background-size: 100% 100%;
        padding: 12px 30px 0;
        position: fixed;
        width: 117.5px;
        height: 54px;
        font-size: 14px;
        left: 50%;
        margin-left: -93px;
        top: 134px;
        color: #fff;
        font-family: arial, "宋体";
        -webkit-transition:-webkit-transform .3s;
        -webkit-animation-delay: .3s;
        -webkit-transform: translate3D(300%,0,0);
    }
    .game .title .result.moveL{
        -webkit-transform: translate3D(0,0,0);
    }
    .game .title .time .metres{
        color: #e3324c;
        text-shadow: 1px 0px 0px #fff,-1px 0px 0px #fff,0px 1px 0px #fff,0px -1px 0px #fff;
        margin-top: 18px;
        text-align: center;
        letter-spacing: 2px;
    }
    .game .title .time .metres span{

    }
    .game .title .ready{
        background: url("/game/static/runner/icon-ready.png") no-repeat;
        background-size: 100% auto;
        width: 200px;
        height: 145px;
        margin: auto;
        display: none;
    }

    .game .title .time .metres{
        font-size: 20px;
        margin-top: 10px;
        font-weight: 600;
    }
    .game .title .time #time{
        font-size: 70px;
    }
</style>
<script>
    import Runner from '../../utils/Runner'
    import Person from '../../utils/Person'
    import Shape from '../../utils/Shape'
    export default {
        data() {
            return {
                showFingerL: false,
                showFingerR: false,
                clickCount : 0,
                runner     : {}
            }
        },
        methods: {
            touchHandle() {
                if (this.clickCount === 5) {
                    if (this.runner.animationV < this.runner.maxV && this.runner.isPlay) {
                        this.runner.animationV++
                    }
                    if (this.runner.runV < 30 && this.runner.isPlay) {
                        this.runner.runV++
                    }
                    this.clickCount = 0
                }
            }
        },
        mounted() {
            this.runner = new Runner({
                runway    : new Shape({}),
                maxV      : 8,
                winW      : window.innerWidth,
                bg        : new Shape({}),
                winH      : window.innerHeight,
                total     : 0,
                runV      : 10,
                limitTime : 100,
                animationV: 2,
                canvas    : document,
                person    : new Person({
                    x        : 0,
                    y        : 0,
                    h        : 0,
                    w        : 0,
                    v        : 0,
                    img_src  : '',
                    img_sX   : 0,
                    img_sY   : 0,
                    img_sW   : 0,
                    img_sH   : 0,
                    increment: 0,
                    status   : 0,
                    name     : 0,
                    level    : 0,
                    distant  : 0,
                }),
                theEndShape: new Shape({}),
            })
        },
        components: {},
    }
</script>
