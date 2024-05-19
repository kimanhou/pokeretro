import React, { FC, DragEvent } from "react";
import pokeball from "assets/pokeball.jpeg";
import styles from "./Arena.module.scss";

const Arena: FC = (props) => {
    const ORBIT_COLORS = {
        STRONGLY_DISAGREE: "#ffba08",
        DISAGREE: "#faa307",
        NOT_SURE: "#e85d04",
        AGREE: "#e85d04",
    };

    const drop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain").split(",");

        if (data.length === 3) {
            const id = data[0];
            const offsetX = data[1];
            const offsetY = data[2];
            const element = document.getElementById(id);
            if (!element) return;

            element.style.left = e.clientX + parseInt(offsetX, 10) + "px";
            element.style.top = e.clientY + parseInt(offsetY, 10) + "px";
            e.preventDefault();
        }
    };

    return (
        <div
            className={styles.arena}
            onDragOver={(e: DragEvent<HTMLDivElement>) => e.preventDefault()}
            onDrop={drop}
        >
            <svg viewBox="0 0 540 540" style={{ maxWidth: "540px" }}>
                <defs>
                    <pattern
                        id="pokeball"
                        x="220"
                        y="220"
                        patternUnits="userSpaceOnUse"
                        width="200"
                        height="200"
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <image
                            x="0"
                            y="0"
                            width="100"
                            height="100"
                            xlinkHref={pokeball}
                        ></image>
                    </pattern>
                </defs>
                <path
                    id="orbit-strongly-disagree"
                    d="M20,270a250,250 0 1,0 500,0a250,250 0 1,0 -500,0"
                    stroke={ORBIT_COLORS.STRONGLY_DISAGREE}
                    fill="none"
                />
                <text
                    width="500"
                    style={{
                        transform: "rotate(-78deg)",
                        transformOrigin: "center",
                    }}
                >
                    <textPath
                        xlinkHref="#orbit-strongly-disagree"
                        fill={ORBIT_COLORS.STRONGLY_DISAGREE}
                    >
                        Strongly disagree
                    </textPath>
                </text>
                <path
                    id="orbit-disagree"
                    d="M70,270a200,200 0 1,0 400,0a200,200 0 1,0 -400,0"
                    stroke={ORBIT_COLORS.DISAGREE}
                    fill="none"
                />
                <text
                    width="500"
                    style={{
                        transform: "rotate(-82deg)",
                        transformOrigin: "center",
                    }}
                >
                    <textPath
                        xlinkHref="#orbit-disagree"
                        fill={ORBIT_COLORS.DISAGREE}
                    >
                        Disagree
                    </textPath>
                </text>
                <path
                    id="orbit-not-sure"
                    d="M120,270a150,150 0 1,0 300,0a150,150 0 1,0 -300,0"
                    stroke={ORBIT_COLORS.NOT_SURE}
                    fill="none"
                />
                <text
                    width="500"
                    style={{
                        transform: "rotate(-79deg)",
                        transformOrigin: "center",
                    }}
                >
                    <textPath
                        xlinkHref="#orbit-not-sure"
                        fill={ORBIT_COLORS.NOT_SURE}
                    >
                        Not sure
                    </textPath>
                </text>
                <path
                    id="orbit-agree"
                    d="M170,270a100,100 0 1,0 200,0a100,100 0 1,0 -200,0"
                    stroke={ORBIT_COLORS.AGREE}
                    fill="none"
                />
                <text
                    width="500"
                    style={{
                        transform: "rotate(-80deg)",
                        transformOrigin: "center",
                    }}
                >
                    <textPath
                        xlinkHref="#orbit-agree"
                        fill={ORBIT_COLORS.AGREE}
                    >
                        Agree
                    </textPath>
                </text>
                <circle
                    cx="270"
                    cy="270"
                    r="50"
                    stroke-width="1px"
                    stroke="#333333"
                    fill="url(#pokeball)"
                    style={{
                        transform: "rotate(30deg)",
                        transformOrigin: "center",
                    }}
                />
            </svg>
        </div>
    );
};

export default Arena;
