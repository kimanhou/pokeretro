import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Divider from "components/common/Divider/Divider";
import "./Header.scss";

interface IHeaderProps {
    setHeaderHeight: Dispatch<SetStateAction<number>>;
}

export const Header: React.FC<IHeaderProps> = (props) => {
    const headerRef = useRef<HTMLElement>(null);

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

            <h1 className="typeface-primary">
                I think that Morbier is the best cheese in the world.
            </h1>
            <Divider />
        </header>
    );
};
