import React from "react";
import './cell.css';

interface CellProps {
    cell: number,
    handleClick: (rowIndex: number, colIndex: number, value: number) => void;
    rowIndex: number,
    colIndex: number
    value: number
}

function Cell({ cell, handleClick, rowIndex, colIndex }: CellProps) {
    return (
        <div className="cell">
            <button type="button" onClick={() => handleClick(rowIndex, colIndex, cell)}>
                {cell}
            </button>
        </div>
    );
}

export default Cell;