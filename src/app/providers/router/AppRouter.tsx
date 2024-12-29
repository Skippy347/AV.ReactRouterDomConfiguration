import React from "react";

import { routerConfiguration } from "./routerConfiguration";
import { Route, Routes } from "react-router-dom";

export function AppRouter(): React.ReactElement {
  return (
    <React.Suspense fallback="Loading">
      <Routes>
        {Object.values(routerConfiguration).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </React.Suspense>
  );
}
