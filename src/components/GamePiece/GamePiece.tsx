import React, { FC, DragEvent } from "react";
import { TeamMemberType } from "types";
import styles from "./GamePiece.module.scss";
import { formatName } from "ts/utils";

interface IGamePieceProps {
    teamMember: TeamMemberType;
    absolute?: boolean;
}

const GamePiece: FC<IGamePieceProps> = (props) => {
    const absoluteClassName = props.absolute ? styles.absolute : "";

    const onDragStart = (e: DragEvent<HTMLDivElement>) => {
        const style = window.getComputedStyle(e.currentTarget, null);
        e.dataTransfer.setData(
            "text/plain",
            `${e.currentTarget.id},${
                parseInt(style.getPropertyValue("left"), 10) - e.clientX
            },${parseInt(style.getPropertyValue("top"), 10) - e.clientY}`
        );
    };

    return (
        <div
            id={`game-piece-${formatName(props.teamMember.name)}`}
            className={`${styles["game-piece"]} ${absoluteClassName}`}
            style={{
                backgroundColor: props.teamMember.avatar
                    ? "transparent"
                    : props.teamMember.color,
                borderRadius: props.teamMember.avatar ? "0" : "50%",
                backgroundImage: `url(${props.teamMember.avatar})`,
            }}
            draggable={props.absolute}
            onDragStart={onDragStart}
        ></div>
    );
};

export default GamePiece;
