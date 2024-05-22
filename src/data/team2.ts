import { TeamMemberType, TeamType } from "types";
import logo2 from "assets/logo-2.jpeg";
import jigglypuff from "assets/jigglypuff.svg";
import gastly from "assets/gastly.svg";
import oddish from "assets/oddish.svg";
import tangela from "assets/tangela.svg";
import venonat from "assets/venonat.svg";
import vulpix from "assets/vulpix.svg";
import paras from "assets/paras.svg";
import krabby from "assets/krabby.svg";
import poliwag from "assets/poliwag.svg";
import dratini from "assets/dratini.svg";
import chansey from "assets/chansey.svg";
import prChen from "assets/pr-chen.jpeg";
import ondine from "assets/ondine.png";
import pierre from "assets/pierre.jpeg";
import cubone from "assets/cubone.svg";
import hitmonlee from "assets/hitmonlee.svg";
import hitmonchan from "assets/hitmonchan.svg";

const TEAM_COLORS = {
    ONE: "#fbdae0",
    TWO: "#d8c6e9",
    THREE: "#bee0f8",
    FOUR: "#fcf6bd",
    FIVE: "#b7e4c7",
    TWO_THREE: "linear-gradient(135deg, #d8c6e9 50%, #bee0f8 50%)",
    TWO_FIVE: "linear-gradient(135deg, #d8c6e9 50%, #b7e4c7 50%)",
    SIX: "#f4bca7",
    SEVEN: "#e1dad4",
};

const TEAM_MEMBERS: TeamMemberType[][] = [
    [
        { color: TEAM_COLORS.ONE, name: "Jade", avatar: jigglypuff },
        { color: TEAM_COLORS.ONE, name: "Gabriel", avatar: chansey },
        { color: TEAM_COLORS.ONE, name: "Alban", avatar: venonat },
    ],
    [
        { color: TEAM_COLORS.TWO, name: "Léo", avatar: gastly },
        { color: TEAM_COLORS.TWO, name: "Raphaël", avatar: tangela },
        { color: TEAM_COLORS.TWO, name: "Louis", avatar: dratini },
    ],
    [
        { color: TEAM_COLORS.TWO, name: "Maël", avatar: poliwag },
        { color: TEAM_COLORS.TWO, name: "Louis", avatar: dratini },
        { color: TEAM_COLORS.TWO, name: "Ambre", avatar: oddish },
    ],
    [
        { color: TEAM_COLORS.FOUR, name: "Alba", avatar: vulpix },
        { color: TEAM_COLORS.FOUR, name: "Noah", avatar: paras },
        { color: TEAM_COLORS.FOUR, name: "Lucas", avatar: krabby },
    ],
    [
        { color: TEAM_COLORS.SIX, name: "Emma", avatar: cubone },
        { color: TEAM_COLORS.SIX, name: "Rose", avatar: hitmonlee },
        { color: TEAM_COLORS.SIX, name: "Hugo", avatar: hitmonchan },
    ],
    [
        { color: TEAM_COLORS.SEVEN, name: "Alice", avatar: ondine },
        { color: TEAM_COLORS.SEVEN, name: "Ben", avatar: pierre },
        { color: TEAM_COLORS.SEVEN, name: "Thomas", avatar: prChen },
    ],
];

export const TEAM_2: TeamType = {
    name: "Team 2",
    members: TEAM_MEMBERS,
    logoSrc: logo2,
};
