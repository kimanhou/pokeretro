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
