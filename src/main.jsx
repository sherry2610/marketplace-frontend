import React from "react";
// import ReactDOM from "react-dom/client";
// import { HomeScreen as App } from "./shared/containers/Home";
import App from "./app/App";
import { createRoot } from "react-dom/client";

import "./output.css";
import "./index.css";
import "@fontsource/work-sans"; // Defaults to weight 400
import "@fontsource/work-sans/400.css"; // Specify weight
import "@fontsource/work-sans/400-italic.css"; // Specify weight and style

// ReactDOM.createRoot(document.getElementById("root")).render(
// );

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
