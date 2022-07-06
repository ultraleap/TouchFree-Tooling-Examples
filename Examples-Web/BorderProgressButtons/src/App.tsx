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
    const [progressToClick, setProgressToClick] = useState(0);
    const [appStyle, setAppStyle] = useState(defaultAppStyle);

    // ============================= Event Handlers =============================
    const onClick = (colour: string) => {
        setAppStyle((s) => ({ ...s, backgroundColor: darken(colour, 80) }));
    };

    const handleTF = (inputAction: CustomEvent) => {
        const { ProgressToClick } = inputAction.detail;
        if (ProgressToClick) {
            setProgressToClick(ProgressToClick);
        }
    };

    // ================================ Effects ================================
    useEffect(() => {
        addTouchFreeCursor();
        const controller = new TouchFree.InputControllers.WebInputController();

        TouchFree.Plugins.InputActionManager._instance.addEventListener(
            "TransmitInputAction",
            handleTF,
            false
        );

        return () => {
            controller.disconnect();
        };
    }, []);

    return (
        <div className="App" style={appStyle}>
            <div className="button-container">
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
    );
}
