import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TouchFree from "./TouchFree/TouchFree_Tooling";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

TouchFree.Connection.ConnectionManager.init();

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
