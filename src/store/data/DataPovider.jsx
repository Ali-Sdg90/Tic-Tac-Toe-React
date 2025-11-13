import { useEffect, useRef, useState } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);
    const [turn, setTurn] = useState("X");

    const gameEnded = useRef(false);
    const [gameResult, setGameResult] = useState("");

    useEffect(() => {
        const endGame = (winner, condition) => {
            console.log("end", winner, condition);

            gameEnded.current = true;

            document.querySelector(`.red-lines`).style.zIndex = "3";

            if (condition) {
                setGameResult(`${winner} WON!`);

                document.querySelector(`.line-${condition + 1}`).style.display =
                    "block";

                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (data[j][i] === winner) {
                            document.querySelector(
                                `.cell-${3 * i + j}`
                            ).style.backgroundColor = "#181818";
                        }
                    }
                }
            } else {
                setGameResult("DRAW!");
            }
        };

        let checkFor = null;
        let counter = 0;
        for (let type = 0; type < 2; type++) {
            type === 0 ? (checkFor = "X") : (checkFor = "O");
            counter = 0;

            for (let row = 0; row < 3; row++) {
                counter = 0;
                for (let col = 0; col < 3; col++) {
                    if (data[col][row] === checkFor) {
                        ++counter === 3 && endGame(checkFor, row);
                    }
                }

                counter = 0;
                for (let col = 0; col < 3; col++) {
                    if (data[row][col] === checkFor) {
                        ++counter === 3 && endGame(checkFor, 3 + row);
                    }
                }
            }

            counter = 0;
            for (let i = 0; i < 3; i++) {
                if (data[i][i] === checkFor) {
                    ++counter === 3 && endGame(checkFor, 6);
                }
            }

            counter = 0;
            for (let i = 0; i < 3; i++) {
                if (data[i][2 - i] === checkFor) {
                    ++counter === 3 && endGame(checkFor, 7);
                }
            }
        }

        counter = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (data[j][i] !== null) {
                    counter++;
                }
            }
        }
        if (counter === 9 && !gameEnded.current) {
            endGame("draw");
        }
    }, [data]);

    return (
        <DataContext.Provider
            value={{ data, setData, turn, setTurn, gameResult }}
        >
            {children}
        </DataContext.Provider>
    );
};
