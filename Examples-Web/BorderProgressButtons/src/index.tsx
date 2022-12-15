import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TouchFree from "TouchFree/src/TouchFree";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

TouchFree.Init();

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
