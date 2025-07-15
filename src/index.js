import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes";
import { FavoritesProvider } from "./contexts/Favorites";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <AppRoutes />
    </FavoritesProvider>
  </React.StrictMode>
);
