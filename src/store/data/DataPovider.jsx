import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);
    const [turn, setTurn] = useState("X");

    const endGame = (winner, condition) => {
        console.log("end", winner, condition);
    };

    useEffect(() => {
        let checkFor = null;
        for (let type = 0; type < 1; type++) {
            type === 0 ? (checkFor = "X") : (checkFor = "O");
            let counter = 0;

            for (let row = 0; row < 3; row++) {
                counter = 0;
                for (let col = 0; col < 3; col++) {
                    if (data[row][col] === checkFor) {
                        console.log("in row 1");
                        ++counter === 3 && endGame(checkFor, `col-${row}`);
                    }
                }

                counter = 0;
                for (let col = 0; col < 3; col++) {
                    if (data[col][row] === checkFor) {
                        ++counter === 3 && endGame(checkFor, `row-${row}`);
                    }
                }
            }

            counter = 0;
            for (let i = 0; i < 3; i++) {
                if (data[i][i] === checkFor) {
                    ++counter === 3 && endGame(checkFor, "ez-line");
                }
            }

            counter = 0;
            for (let i = 0; i < 3; i++) {
                if (data[i][2 - i] === checkFor) {
                    ++counter === 3 && endGame(checkFor, "hard-line");
                }
            }
        }
    }, [data]);

    return (
        <DataContext.Provider value={{ data, setData, turn, setTurn }}>
            {children}
        </DataContext.Provider>
    );
};
