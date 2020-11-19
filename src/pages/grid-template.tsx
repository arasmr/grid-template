import React, { useState } from "react";
import { generateGrid, isFibonacciLength5 } from "../utils";
import Grid from "../components/grid/grid";

function GridTemplate() {
    const [grid, setGrid] = useState(generateGrid(50, 50));

    const handleClick = (rowIndex: number, columnIndex: number, value: number) => {
        // new value to set each cell in the selected row and column
        let newValue = value + 1;
        // if the selected number matches with the fibonacci lenght of 5 set each cell in the col and row as 0
        if (isFibonacciLength5(newValue)) {
            newValue = 0;
        };

        // initialize the new array for the child rendering on state change
        const newGrid = [...grid];
        // set each cell on the row
        newGrid[rowIndex].fill(newValue);
        // set each cell on the column
        newGrid.map((row) => row.fill(newValue, columnIndex, columnIndex + 1));
        setGrid(newGrid);
    };

    return (
        <div style={{ display: "inline-block" }}>
            <Grid grid={grid} handleClick={handleClick} />
        </div>
    );
}

export default GridTemplate;
