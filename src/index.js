import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "App";

// i18n 초기화
import "./i18n";

// LINGSSOFT Dashboard Context Provider
import { MaterialUIControllerProvider } from "context";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <HashRouter>
    <MaterialUIControllerProvider>
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </MaterialUIControllerProvider>
  </HashRouter>
);
