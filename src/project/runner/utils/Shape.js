export class Shape {
    constructor(config) {
        /** @public  {int} y coordinate y of the canvas context **/
        this.y = config.y

        /** @public  {int} x coordinate x of the canvas context **/
        this.x = config.x

        /** @public  {int} h shape height of the canvas context **/
        this.h = config.h

        /** @public  {int} w shape width of the canvas **/
        this.w = config.w

        /** @public  {int} v shape move speed **/
        this.v = config.v

        /** @public  {string} img_src shape img url **/
        this.img_src = config.img_src

        /** @public  {int} img_sX context cut img x context**/
        this.img_sX = config.img_sX

        /** @public  {int} img_sX context cut img y context**/
        this.img_sY = config.img_sY

        /** @public  {int} img_sX context cut img width context**/
        this.img_sW = config.img_sW

        /** @public  {int} img_sX context cut img height context**/
        this.img_sH = config.img_sH

        /** @public  {int} increment shape increment **/
        this.increment = config.increment
    }

    /**
     * draw this shape in the canvas
     * @param  {Object} context canvas context
     */
    draw(context) {
        let img = new Image()
        img.src = this.img_src
        let maxW = img.width
        context.drawImage(img, this.img_sX, this.img_sY, this.img_sW,
            this.img_sH, this.x, this.y, this.w, this.h)
        context.globalCompositeOperation = 'source-over'
        if (this.img_sX === maxW - this.increment) {
            this.increment *= -1
        }
        if (this.img_sX === 0) {
            this.increment = this.increment < 0 ? this.increment * -1 : this.increment
        }
        this.img_sX += this.increment
    }
}
