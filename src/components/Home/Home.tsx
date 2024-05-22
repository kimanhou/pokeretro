import React, { FC } from "react";
import { TeamType } from "types";
import TeamSelection from "./TeamSelection";
import styles from "./Home.module.scss";

interface IHomeProps {
    teams: TeamType[];
}

const Home: FC<IHomeProps> = (props) => {
    return (
        <div className={styles.home}>
            <h1>Ready to start a sprint retro ?</h1>
            <h2>Choose your team</h2>
            <div className={styles["team-selection-container"]}>
                {props.teams.map((team) => (
                    <TeamSelection team={team} key={team.name} />
                ))}
            </div>
        </div>
    );
};

export default Home;
