import { CSSProperties } from "react";

export interface ButtonProps {
  progressToClick: number;
  clickCallback: (args: any[] | any) => void;
  simulateTouchFree?: () => void;
  colour?: string;
}

interface customCSS extends CSSProperties {
  "--left-width"?: string;
  "--left-height"?: string;
  "--right-width"?: string;
  "--right-height"?: string;
  "--border-style"?: string;
}

export const defaultButtonStyle: customCSS = {
  height: "50px",
  width: "100px",
  border: 0,
  borderTopLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  transition: "all 0.2s",
  "--left-width": "97px",
  "--left-height": "44px",
  "--right-width": "97px",
  "--right-height": "44px",
  "--border-style": "3px solid white",
};
