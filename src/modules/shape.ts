export default class Shape {
    private ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    /**
     * render a square in location of (x, y)
     */
    square(x: number, y: number, size: number): void {
        this.ctx.fillRect(x, y, size, size)
    }

    squareStroke(x: number, y: number, size: number): void {
        this.ctx.strokeRect(x, y, size, size);
    }
}