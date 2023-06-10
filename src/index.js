import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import {
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from "./canvas";

import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//       <App />
//     {/* <StarsCanvas /> */}
//   </React.StrictMode>
// );
