import { CSSProperties } from "react";

export interface ButtonProps {
    progressToClick: number;
    clickCallback: (args: any[] | any) => void;
    colour?: string;
}

interface customCSS extends CSSProperties {
    "--left-width"?: string;
    "--left-height"?: string;
    "--right-width"?: string;
    "--right-height"?: string;
    "--border-style"?: string;
}

const heightPx = 100;
const widthPx = 200;

export const defaultButtonStyle: customCSS = {
    height: `${heightPx}px`,
    width: `${widthPx}px`,
    border: 0,
    borderTopLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    transition: "all 0.2s",
    transform: "scale(1)",
    "--left-width": `${widthPx - 3}px`,
    "--left-height": `${heightPx - 3}px`,
    "--right-width": `${widthPx - 3}px`,
    "--right-height": `${heightPx - 3}px`,
    "--border-style": "3px solid white",
};
