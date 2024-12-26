import make2DArray from "./utils/make2DArray.js";
import Shape from "./modules/shape.js";
import Render from "./modules/render.js";

const canvas = <HTMLCanvasElement>(document.getElementById("canvas"));
let w = Math.floor(window.innerWidth / 5);
let h = Math.floor(window.innerHeight / 5);
// limit the canvas size
if (w > 220)
    w = 220;
if (h > 130)
    h = 130;

// set canvas size
canvas.width = (w - (w % 5)) * 5;
canvas.height = (h - (h % 5)) * 5;

const ctx = canvas.getContext('2d');

const shape = new Shape(ctx!);
const render = new Render(ctx!, canvas);

let size = 5,
    FPS = 100,
    rows = canvas.clientWidth / size,
    cols = canvas.clientHeight / size;

let grid: (number | null)[][] = make2DArray(rows, cols);
let click = false;
let mousePosition = {
    x: -1,
    y: -1,
}

canvas.addEventListener('mousedown', (e) => {
    mousePosition.x = Math.floor(Math.abs(e.offsetX) / size);
    mousePosition.y = Math.floor(Math.abs(e.offsetY) / size);
    click = true;

})
document.addEventListener('mouseup', () => {
    click = false;
})

let n = 1;

canvas.addEventListener('mousemove', (e) => {
    mousePosition.x = Math.floor(Math.abs(e.offsetX) / size);
    mousePosition.y = Math.floor(Math.abs(e.offsetY) / size);
})


function run() {
    // clean canvas
    render.background('#d3c891');

    for (let i = (grid.length - 1); i >= 0; i--) {
        for (let j = grid[i].length; j >= 0; j--) {
            if (grid[i][j]) { // then: it's a piece

                render.fill("#444")

                shape.square(j * size, i * size, size);
                if (grid[i + 1] != null) { // then: it's not the last piece of canvas

                    if (grid[i + 1][j] == 0) { // then: below this piece there is empty space
                        grid[i][j] = 0; // clean prev piece
                        grid[i + 1][j] = n; // insert new piece in below
                    } else {
                        if (grid[i + 1][j + 1] != null && grid[i + 1][j + 1] == 0) { // then: Below this piece on the right there is empty space
                            grid[i][j] = 0;
                            grid[i + 1][j + 1] = n; // insert new piece in below-right
                        }
                        if (grid[i + 1][j - 1] != null && grid[i + 1][j - 1] == 0) { // then: Below this piece on the left there is empty space
                            grid[i][j] = 0;
                            grid[i + 1][j - 1] = n; // insert new piece in below-left
                        }
                    }
                }
            }
        }
    }

}

setInterval(() => {
    if (click) {
        grid[mousePosition.y][mousePosition.x] = n;
    }
    run()
}, 1000 / FPS);