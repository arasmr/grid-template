import React, { useState } from "react";
import { generateGrid} from "../utils";
import Grid from "../components/grid/grid";

function GridTemplate() {
    const [grid, setGrid] = useState(generateGrid(50, 50));

    const setCellsToZeroIfSequenceExist = (grid: number[][]) => {
        return grid.map(row => {
            for (let i = 5; i < row.length; i++) {
                if (row[i] === 5 && row[i - 1] === 3 && row[i - 2] === 2 && row[i - 3] === 1 && row[i - 4] === 1 && row[i - 5] === 0) {
                    row.fill(0, i - 5, i);
                }
            }
    
            return row;
        })
    }

    const handleClick = (rowIndex: number, columnIndex: number, value: number) => {
        // new value to set each cell in the selected row and column
        let newValue = value + 1;
        // initialize the new array for the child rendering on state change
        const newGrid = [...grid];
        // set each cell on the row
        newGrid[rowIndex].fill(newValue);
        // set each cell on the column
        newGrid.map((row) => row.fill(newValue, columnIndex, columnIndex + 1));
        // check if the fibonacci sequence with the leght of 5 exist and update the grid.
        const result = setCellsToZeroIfSequenceExist(newGrid);
        setGrid(result);
    };

    return (
        <div style={{ display: "inline-block" }}>
            <Grid grid={grid} handleClick={handleClick} />
        </div>
    );
}

export default GridTemplate;
