import React, { FC } from "react";
import Arena from "components/Arena/Arena";
import TeamMember from "components/TeamMember/TeamMember";
import { TeamType } from "types";
import { Header } from "components/Header/Header";
import styles from "./Board.module.scss";

interface IBoardProps {
    team: TeamType;
}

const Board: FC<IBoardProps> = (props) => {
    return (
        <>
            <Header team={props.team} />
            <div className={styles.board}>
                <Arena />
                <div className={styles["team-members-container"]}>
                    {props.team.members.map((line) => (
                        <div
                            className={styles["team-members-line"]}
                            key={line[0].color}
                        >
                            {line.map((member) => (
                                <TeamMember
                                    key={member.name}
                                    teamMember={member}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Board;
