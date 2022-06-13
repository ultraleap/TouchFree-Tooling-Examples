import React, { useEffect, useRef } from "react";
import "./style.css";
import InteractionButton from "./InteractionButton";
import { ConnectionManager } from "./TouchFree/Connection/ConnectionManager";
import { DotCursor } from "./TouchFree/Cursors/DotCursor";
import { WebInputController } from "./TouchFree/InputControllers/WebInputController";
import { InputActionManager } from "./TouchFree/Plugins/InputActionManager";
import { InputType } from "./TouchFree/TouchFreeToolingTypes";
import surferImg from "./Images/surfer.png";

const colors: string[] = [
  "#D2386C",
  "#B55A30",
  "#E9897E",
  "#FDAC53",
  "#F5DF4D",
  "#A0DAA9",
  "#00A170",
  "#9BB7D4",
  "#0072B5",
  "#926AA6",
];

const App: React.FC = () => {
  const [progressToClick, setProgressToClick] = React.useState<number>(0);
  const [backgroundColor, setBackgroundColor] =
    React.useState<string>("lightgray");

  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ConnectionManager.init();
    addTouchFreeCursor();
    const controller: WebInputController = new WebInputController();

    InputActionManager._instance.addEventListener(
      "TransmitInputAction",
      handleTFInput
    );

    return () => {
      controller.disconnect();
    };
  }, []);

  const handleTFInput = (evt: any): void => {
    const inputAction = evt?.detail?.InputType;
    // DOWN input has a bug where it sends ProgressToClick of 0 so ignore this for now
    if (inputAction !== InputType.DOWN) {
      const prog = evt?.detail?.ProgressToClick;
      setProgressToClick(prog ? prog : 0);
    }
  };

  const addTouchFreeCursor = (): void => {
    const createCursor = (size: number, zIndex: string): HTMLImageElement => {
      const c = document.createElement("img");
      c.src = surferImg;
      c.style.position = "absolute";
      c.width = size;
      c.height = size;
      c.style.zIndex = zIndex;
      c.style.pointerEvents = "none";
      // This is a special class used by the WebInputController to identify the html elements that
      // make up the cursor. This is so it can ignore cursor-related objects when it is looking
      // for elements to pointerover/pointerout etc.
      c.classList.add("touchfreecursor");
      return c;
    };

    const cursor = createCursor(80, "1002");
    const cursorRing = createCursor(100, "1001");

    if (appRef.current) {
      appRef.current.appendChild(cursor);
      appRef.current.appendChild(cursorRing);
    }

    new DotCursor(cursor, cursorRing);
  };

  return (
    <div className="center" ref={appRef} style={{ backgroundColor }}>
      <div className="container">
        {colors.slice(0, 4).map((color, index) => {
          return (
            <InteractionButton
              key={index}
              progressToClick={progressToClick}
              setBackgroundColor={setBackgroundColor}
              color={color}
            />
          );
        })}
      </div>
      <div className="container">
        {colors.slice(4, 8).map((color, index) => {
          return (
            <InteractionButton
              key={index}
              progressToClick={progressToClick}
              setBackgroundColor={setBackgroundColor}
              color={color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
