import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css"; // cssを読み込む
import App from "./components/App";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error("Failed to find the root element.");
}
