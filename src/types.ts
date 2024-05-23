export type TeamMemberType = {
    color: string;
    name: string;
    avatar?: string;
};

export type TeamType = {
    name: string;
    members: TeamMemberType[][];
    logoSrc: string;
};

export type Coordinates = {
    x: number;
    y: number;
};

export type Position = {
    name: string;
    coordinates: Coordinates;
};
