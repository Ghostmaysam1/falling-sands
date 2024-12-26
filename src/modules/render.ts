export default class Render {
    width: number;
    height: number;
    ctx: CanvasRenderingContext2D;
    colors: {fill: string | null, stroke: string | null}

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.ctx = ctx;
        this.colors = {
            fill: null,
            stroke: null
        }
    }

    /**
     * set the fill style to (color)
     */
    fill(color: string): void {
        this.ctx.fillStyle = color;
        this.colors.fill = color;
    }

    // /**
    //  * remove stroke style
    //  */
    // noStroke() {
    //     this.ctx.strokeStyle = "#00000000";
    // }

    // /**
    //  * set the stroke style to (color)
    //  */
    // stroke(color: string) {
    //     this.ctx.strokeStyle = color;
    //     this.colors.stroke = color;
    // }

    // /**
    //  * remove stroke style
    //  */
    // noFill() {
    //     this.ctx.fillStyle = "#00000000";
    // }

    /**
     * clear canvas and set background
     */

    background(color: string) {
        let c = this.colors.fill;
        this.fill(color);
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.fill(c ? c : '#00000000');
    }
}