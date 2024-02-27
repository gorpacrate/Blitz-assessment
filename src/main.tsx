import React from "react";
import ReactDOM from "react-dom/client";
import { shouldForwardProp } from "goober/should-forward-prop";
import isPropValid from "@emotion/is-prop-valid";
import { setup } from "goober";
import App from "./App.tsx";

setup(
  React.createElement,
  undefined,
  undefined,
  shouldForwardProp(isPropValid)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
