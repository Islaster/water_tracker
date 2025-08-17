import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { WaterProvider } from "./contexts/waterContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WaterProvider>
      <App />
    </WaterProvider>
  </StrictMode>
);
