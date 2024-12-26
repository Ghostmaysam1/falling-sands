function make2DArray(rows: number, cols: number): (null)[][] {
    let arr = new Array(cols);
    for(let i=0;i<arr.length;i++) {
        arr[i] = new Array(rows).fill(0);
    }
    return arr;
}

export default make2DArray;