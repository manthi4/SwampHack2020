import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Window from "./components/window";
import "rc-slider/assets/index.css";
import Ship from "./components/ship";

ReactDOM.render(
  <div>
    <Window />,
    <Ship />
  </div>,
  document.getElementById("root")
);
