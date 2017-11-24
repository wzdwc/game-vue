import Shape from 'src/project/runner/utils/Shape'

class Person extends Shape {
    constructor(config) {
        super({config})
        this.status = config.status
        this.name = config.name
        this.level = config.level
        this.distance = config.distance
    }

    // autoDeceleration() {
    //     if (this.animate_v > 4) {
    //         this.animate_v -= 1;
    //     }
    //     if(this.runV>8){
    //         this.runV -=1;
    //     }
    //     this.downVSetTime = setTimeout(() => {
    //         this.autoDeceleration
    //     }, 1000);
    // }
}


let a = new Person()
