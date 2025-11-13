import React, { useContext } from "react";
import { DataContext } from "../store/data/DataContext";

const EndScreen = () => {
    const { gameResult } = useContext(DataContext);

    return (
        <div className="end-screen-section" style={{ display: gameResult ? "flex" : "none" }}>
            <div className="end-text">{gameResult}</div>
            <div className="end-btn" onClick={() => window.location.reload()}>
                Play Again
            </div>
        </div>
    );
};

export default EndScreen;
