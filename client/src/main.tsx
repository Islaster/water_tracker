import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { WaterProvider } from "./contexts/waterContext.tsx";
import { UserProvider } from "./contexts/userContext.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <WaterProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </WaterProvider>
    </BrowserRouter>
  </StrictMode>
);
