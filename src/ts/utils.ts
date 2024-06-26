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
    const formatted = name
        // eslint-disable-next-line
        .replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        // eslint-disable-next-line
        .replaceAll(/'/g, "")
        // eslint-disable-next-line
        .replaceAll(/\s+/g, "-")
        .toLocaleLowerCase();

    return formatted;
};
