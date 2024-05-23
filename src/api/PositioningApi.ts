import { Position } from "types";

const handleJsonResponse = (response: Response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(response.statusText);
    }
};

const endpoint = "/positions";

export const getPositions = () => {
    return fetch(endpoint)
        .then(handleJsonResponse)
        .then((x) => x as Position);
};

export const postPosition = (position: Position) => {
    fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(position),
        headers: { "Content-Type": "application/json" },
    }).then(handleJsonResponse);
};
