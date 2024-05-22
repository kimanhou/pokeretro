import React, { FC } from "react";
import { Link } from "react-router-dom";
import { formatName } from "ts/utils";
import { TeamType } from "types";
import styles from "./TeamSelection.module.scss";

interface ITeamSelectionProps {
    team: TeamType;
}

const TeamSelection: FC<ITeamSelectionProps> = (props) => {
    console.log("props.team.logoSrc", props.team.logoSrc);
    return (
        <Link
            className={styles["team-selection"]}
            to={`/${formatName(props.team.name)}`}
        >
            <div
                className={styles["team-logo"]}
                style={{ backgroundImage: `url(${props.team.logoSrc})` }}
            />
            <h3>{props.team.name}</h3>
        </Link>
    );
};

export default TeamSelection;
