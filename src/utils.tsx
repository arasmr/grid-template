// create a grid template with the specified number of rows and columns
export function generateGrid(rows: number, columns: number): number[][] {
    return Array(rows)
        .fill(0)
        .map(() => Array(columns).fill(0));
}