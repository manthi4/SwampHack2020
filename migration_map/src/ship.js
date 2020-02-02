import React, { useState } from "react";
import sd from "./sun-deck.png";
import up from "./UPPER-DECK.png";
import ld from "./LOWER-DECK.png";
import td from "./TERRACE-DECK.png";
import DaySelector from "./dayDropdown";
import Dropdown from "./deckDropdown";
import TimeSel from "./TimeSelector"
//import RHmap from "react-heatmap/dist/react-heatmap.js";
const images = {
  lower: [ld],
  upper: [up],
  sun: [sd],
  terrace: [td]
};

//const ReactHeatmap = require('react-heatmap');
// const data = [
//   { x: 10, y: 15, value: 5 },
//   { x: 50, y: 50, value: 2 }
// ];

const Ship = props => {
  const [name, setName] = useState("lower");
  const onSelectDeck = deck => {
    const keys = Object.keys(images);
    setName(keys[deck - 1]);
  };
  const onSelectDay = deck => {
    const keys = Object.keys(images);
    setName(keys[deck - 1]);
  };
  console.log();
  return (
    <div>
      <Dropdown onChange={onSelectDeck} />
      <DaySelector onChange={onSelectDay} />
      <TimeSel/>
      {/* <ReactHeatmap max={5} data={data} /> */}
      <img src={images[name]} alt="ouch" />
      
    </div>
  );
};

export default Ship;
