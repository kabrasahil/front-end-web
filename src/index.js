import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import "./index.css"
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from "./canvas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
      {/* <StarsCanvas /> */}
  </React.StrictMode>
);