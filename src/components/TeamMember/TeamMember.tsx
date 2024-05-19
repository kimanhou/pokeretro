import React, { FC } from "react";
import GamePiece from "components/GamePiece/GamePiece";
import { TeamMemberType } from "types";
import styles from "./TeamMember.module.scss";

interface ITeamMemberProps {
    teamMember: TeamMemberType;
}

const TeamMember: FC<ITeamMemberProps> = (props) => {
    return (
        <div
            className={styles["team-member"]}
            style={{ background: props.teamMember.color }}
        >
            <div className={styles["game-piece-container"]}>
                <GamePiece teamMember={props.teamMember} absolute={true} />
                <GamePiece teamMember={props.teamMember} />
            </div>
            <span>{props.teamMember.name}</span>
        </div>
    );
};

export default TeamMember;
