export default class Runner {
    constructor (runway, person, maxV, winW, winH, total, runV, shapes, animationV, downV) {
        this.runway = runway
        this.maxV = maxV
        this.winW = winW
        this.winH = winH
        this.total = total
        this.downV = downV
        this.runV = runV
        this.animationV = animationV
        this.shapes = shapes
        let downVSetTime = null
    }
    playAnimation() {

    }
    levelUp() {

    }
    ready() {

    }
    autoDeceleration() {
        if (this.animationV > 4) {
            this.animationV -= 1;
        }
        if(this.runV>8){
            this.runV -=1;
        }
        this.downVSetTime = setTimeout(this.downV, 1000);
    }
    init() {

    }
}
