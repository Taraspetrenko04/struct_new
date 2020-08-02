import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import { BrowserRouter } from "react-router-dom"; //routes for pages
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  , document.getElementById("root")
);

