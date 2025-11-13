import React from "react";
import { DataProvider } from "./data/DataPovider";

const StoreProvider = ({ children }) => {
    return (
        <>
            <DataProvider>
                <>{children}</>
            </DataProvider>
        </>
    );
};

export default StoreProvider;
