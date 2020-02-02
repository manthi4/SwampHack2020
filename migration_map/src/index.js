import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Window from "./components/window";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Ship from ".//Ship";

ReactDOM.render(
  <div>
    <Slider />,
    <Window />,
    <Ship />
  </div>,
  document.getElementById("root")
);

serviceWorker.register();
