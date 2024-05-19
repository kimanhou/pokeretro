import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.scss";

function App() {
    const [headerHeight, setHeaderHeight] = useState(0);

    return (
        <div className={`app-container`}>
            <HashRouter>
                <Header setHeaderHeight={setHeaderHeight} />
                <Routes>
                    <Route
                        path={"/"}
                        element={
                            <Home
                                height={`calc(100vh - ${headerHeight}px - 50px)`}
                            />
                        }
                    ></Route>
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
