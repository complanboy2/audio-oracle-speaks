import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.PROD ? "/sadguru-vaakku" : ""}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
