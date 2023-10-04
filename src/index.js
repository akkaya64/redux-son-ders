import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
