import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../store/data/DataContext";

const GameCell = ({ col, row }) => {
    const { data, setData, setTurn, turn } = useContext(DataContext);

    const [showCellAs, setShowCellAs] = useState(null);

    useEffect(() => {
        setShowCellAs(data[row][col]);
    }, [data, col, row]);

    const clickHandler = () => {
        if (!showCellAs) {
            setData((prev) => {
                const copyData = prev.map((r) => [...r]);
                copyData[row][col] = turn;
                return copyData;
            });

            setTurn((prev) => (prev === "X" ? "O" : "X"));
        }
    };

    return (
        <div className="game-cell" onClick={clickHandler}>
            <div>{showCellAs}</div>
        </div>
    );
};

export default GameCell;
