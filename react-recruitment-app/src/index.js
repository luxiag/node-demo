import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "assets/css/reset.css";
import "assets/css/chatui-theme.css";
import "assets/css/tailwind.css";
import "tailwindcss/tailwind.css";
import "assets/css/theme.less";
import { AppProviders } from "context";

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
