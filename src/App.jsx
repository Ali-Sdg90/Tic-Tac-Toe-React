import React from "react";
import SideSelection from "./components/SideSelection";
import Header from "./components/Header";
import Base from "./components/Base";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="app">
            <Header />
            <SideSelection />
            <Base />
            <Footer />
        </div>
    );
};

export default App;
