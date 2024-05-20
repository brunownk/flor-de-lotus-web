import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";

import '@config/i18n'
import '@config/zod-error-map'
import '@styles/global.scss'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
