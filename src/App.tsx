import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { formatName } from "ts/utils";
import { TeamType } from "types";
import { Footer } from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Board from "components/Board/Board";
import { TEAM_1 } from "./data/team1";
import { TEAM_2 } from "data/team2";
import "./App.scss";

function App() {
    const teams: TeamType[] = [TEAM_1, TEAM_2];

    return (
        <div className={`app-container`}>
            <HashRouter>
                <Routes>
                    {teams.map((team) => (
                        <Route
                            path={`/${formatName(team.name)}`}
                            element={<Board team={team} />}
                            key={team.name}
                        ></Route>
                    ))}

                    <Route path="/" element={<Home teams={teams} />}></Route>
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
