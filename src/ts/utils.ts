import { CityEnum } from "./enum";

export const getValueOrDefault = (s: string | null | undefined) => {
    if (!s) {
        return "";
    }

    return s;
};

export const scrollTo = ({ elementId }: { elementId: string }) => {
    const myElement = document.getElementById(elementId);
    if (!myElement) return;

    myElement.scrollIntoView();
};

export const formatName = (name: string) => {
    return name
        .replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .replaceAll(/'/g, "")
        .replaceAll(/\s+/g, "-")
        .toLocaleLowerCase();
};
