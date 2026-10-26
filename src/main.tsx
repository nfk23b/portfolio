import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/source-sans-3/300.css";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/700.css";
import "./i18n";
import App from "./App";

const root = document.getElementById("root");
if (!root) throw new Error("#root element not found");

createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
