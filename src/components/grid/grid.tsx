import React from "react";
import Cell from "../cell/cell";

interface GridProps {
    grid: number[][],
    handleClick: (rowIndex: number, colIndex: number, value: number) => void;
}

function Grid({ grid, handleClick }: GridProps) {
    return (
        <div style={{ display: "inline-block" }}>
            <div
                style={{
                    display: "grid",
                    gridTemplateRows: `repeat(${grid.length}, 1fr)`,
                    gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`,
                    gridGap: 2,
                }}
            >
                {grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <Cell key={colIndex} cell={cell} handleClick={handleClick} colIndex={colIndex} rowIndex={rowIndex} value={cell} />
                    ))
                )}
            </div>
        </div>
    );
}

export default Grid;