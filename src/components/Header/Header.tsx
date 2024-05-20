import React, {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react";
import Divider from "components/common/Divider/Divider";
import { TEAM_MEMBERS } from "../../constants";
import "./Header.scss";
import { formatName } from "ts/utils";

interface IHeaderProps {
    setHeaderHeight: Dispatch<SetStateAction<number>>;
}

export const Header: React.FC<IHeaderProps> = (props) => {
    const [prompt, setPrompt] = useState(
        "I think that Morbier is the best cheese in the world."
    );
    const headerRef = useRef<HTMLElement>(null);

    const resetPositions = () => {
        const gamePieceIds = TEAM_MEMBERS.map((line) =>
            line.map((t) => `game-piece-${formatName(t.name)}`)
        ).flat();

        gamePieceIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            element.style.transition = "left 0.4s, top 0.4s";
            element.style.left = "0";
            element.style.top = "0";

            setTimeout(() => {
                element.style.transition = "unset";
            }, 500);
        });
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPrompt(e.target.value);
    };

    useEffect(() => {
        if (headerRef.current) {
            props.setHeaderHeight(headerRef.current?.clientHeight);
        }
    }, []);

    return (
        <header className="flex-column" ref={headerRef}>
            <div className="tag-line flex-row align-items-center">
                <div className="tag-line-decoration left" />
                <h4>
                    <i>Sprint Retro</i>
                </h4>
                <div className="tag-line-decoration right" />
            </div>

            <input value={prompt} onChange={onInputChange} />
            <Divider />
            <button onClick={resetPositions} className="reset-positions-button">
                RESET
            </button>
        </header>
    );
};
