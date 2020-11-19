// created a grid template with the specified number of rows and seats
export function generateGrid(rows: number, columns: number): number[][] {
    return Array(rows)
        .fill(0)
        .map(() => Array(columns).fill(0));
}

export function isFibonacciLength5(num: number) {
    return ((num - 1) + (num - 2)) === 5;
}