import { BrowserRouter } from "react-router-dom";
import "./index.scss";

import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Container root not found");
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <div>Hello world</div>
  </BrowserRouter>
);
