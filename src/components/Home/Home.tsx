import React, { FC } from "react";
import Arena from "components/Arena/Arena";
import TeamMember from "components/TeamMember/TeamMember";
import { TEAM_MEMBERS } from "../../constants";
import styles from "./Home.module.scss";

interface IHomeProps {
    height: string;
}

const Home: FC<IHomeProps> = (props) => {
    return (
        <div className={styles.home}>
            <Arena />
            <div className={styles["team-members-container"]}>
                {TEAM_MEMBERS.map((line) => (
                    <div
                        className={styles["team-members-line"]}
                        key={line[0].color}
                    >
                        {line.map((member) => (
                            <TeamMember key={member.name} teamMember={member} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
