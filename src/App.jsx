import React from "react";
import Header from "./components/Header";
import Base from "./components/Base";
import Footer from "./components/Footer";
import EndScreen from "./components/EndScreen";

const App = () => {
    return (
        <div className="app">
            <Header />
            <EndScreen />
            <Base />
            <Footer />
        </div>
    );
};

export default App;
