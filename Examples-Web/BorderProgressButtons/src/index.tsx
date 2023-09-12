import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { init } from "touchfree/src";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

init();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
