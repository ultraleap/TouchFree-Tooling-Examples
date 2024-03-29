import { useCallback, useEffect, useState } from "react";
import { ButtonProps, defaultButtonStyle } from "./types";

export default function Button(props: ButtonProps) {
    const { colour, progressToClick, clickCallback } = props;

    // ================================= States =================================
    const [style, setStyle] = useState(defaultButtonStyle);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const setDefaultStyle = useCallback(() => {
            setStyle({
                ...defaultButtonStyle,
                backgroundColor: colour,
            });
        }, [colour]);

    // ============================= Event Handlers =============================
    const mouseEvents = {
        onPointerEnter: () => {
            setIsMouseOver(true);
            setStyle((s) => ({ ...s, transform: "scale(1.2)" }));
        },

        onPointerLeave: () => {
            setIsMouseOver(false);
            setDefaultStyle();
        },

        onPointerUp: () => {
            setIsClicked(true);
            setDefaultStyle();
            clickCallback(colour);
        },

        onPointerDown: () => {
            setIsClicked(false);
        },
    };

    // ================================ Effects ================================
    useEffect(() => {
        if (colour) {
            setStyle((s) => ({ ...s, backgroundColor: colour }));
        }
    }, [colour]);

    useEffect(() => {
        if (progressToClick < 0.05 || !isMouseOver) {
            if (!isMouseOver) {
                setDefaultStyle();
            }
            setIsClicked(false);
            return;
        }

        if (isClicked) {
            setDefaultStyle();
            return;
        }

        setStyle((s) => ({
            ...s,
            "--left-width": `${progressToClick * 100 - 2}%`,
            "--right-width": `${progressToClick * 100 - 2}%`,
            "--left-height": `${progressToClick * 100 - 3}%`,
            "--right-height": `${progressToClick * 100 - 3}%`,
            "--border-style": "3px solid black",
            transform: `scale(${1.2 - progressToClick / 2})`,
        }));
    }, [progressToClick, isClicked, isMouseOver, setDefaultStyle]);

    return <button className="button" style={style} {...mouseEvents} />;
}
