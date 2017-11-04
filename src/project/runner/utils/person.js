import Shape from 'shape'

class Person extends Shape {
    constructor(config, status, name, level, distance) {
        super({config})
        this.status = status
        this.name = name
        this.level = level
        this.distance = distance
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
