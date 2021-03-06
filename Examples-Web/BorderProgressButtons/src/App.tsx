import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import darken from "./darken";
import { addTouchFreeCursor } from "./TouchFree/addTouchFreeCursor";
import TouchFree from "./TouchFree/TouchFree_Tooling";

const defaultAppStyle = {
    backgroundColor: "#264653",
};

export default function App() {
    // ================================= States =================================
    const [progressToClick, setProgressToClick] = useState<number>(0);
    const [appStyle, setAppStyle] = useState(defaultAppStyle);

    // ============================= Event Handlers =============================
    const onClick = (colour: string): void => {
        setAppStyle((s) => ({ ...s, backgroundColor: darken(colour, 80) }));
    };

    const handleTouchFree = (inputAction: CustomEvent): void => {
        const { ProgressToClick } = inputAction.detail;
        if (ProgressToClick) {
            setProgressToClick(ProgressToClick);
        }
    };

    // ================================ Effects ================================
    useEffect(() => {
        document.body.style.overflow = "hidden";
        addTouchFreeCursor();
        const controller = new TouchFree.InputControllers.WebInputController();

        TouchFree.Plugins.InputActionManager._instance.addEventListener(
            "TransmitInputAction",
            handleTouchFree,
            false
        );

        return () => {
            controller.disconnect();
        };
    }, []);

    return (
        <div className="App" style={appStyle}>
            <div className="button-col">
                <div className="button-row">
                    <Button
                        progressToClick={progressToClick}
                        colour="#2a9d8f"
                        clickCallback={onClick}
                    />
                    <Button
                        progressToClick={progressToClick}
                        colour="#e9c46a"
                        clickCallback={onClick}
                    />
                </div>
                <div className="button-row">
                    <Button
                        progressToClick={progressToClick}
                        colour="#f4a261"
                        clickCallback={onClick}
                    />
                    <Button
                        progressToClick={progressToClick}
                        colour="#e76f51"
                        clickCallback={onClick}
                    />
                </div>
            </div>
        </div>
    );
}
