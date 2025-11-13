import React from "react";
import GameCell from "./GameCell";

const Base = () => {
    return (
        <div className="base-section">
            <div className="game-base">
                {new Array(9).fill(null).map((_, index) => (
                    <GameCell
                        index={index}
                        col={Math.floor(index / 3)}
                        row={Math.floor(index % 3)}
                        key={index}
                    />
                ))}
            </div>
            
            <div className="red-lines">
                {Array(9)
                    .fill(null)
                    .map((_, index) => (
                        <div
                            className={`red-line line-${index + 1}`}
                            key={index}
                        ></div>
                    ))}
            </div>
        </div>
    );
};

export default Base;
