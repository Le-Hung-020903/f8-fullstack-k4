import React from "react";
import "./components/Slider/Slider";
import Header from "./components/Header/Header";
import Book from "./pages/Book/Book";
import Endow from "./pages/Endow/Endow";
import Main from "./pages/Main/Main";
import Library from "./pages/Library/Library";
const HomePage = () => {
    return (
        <>
            <Header />
            <main className="main-container">
                <Main />
                <Book />
                <Endow />
                <Library />
            </main>
        </>
    );
};

export default HomePage;
