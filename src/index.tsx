import "./index.scss";

import { AppRouter } from "./app/providers/router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Container root not found");
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
