import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { WaterProvider } from "./contexts/waterContext.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <WaterProvider>
        <App />
      </WaterProvider>
    </BrowserRouter>
  </StrictMode>
);
