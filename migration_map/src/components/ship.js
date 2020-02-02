import React, { useState } from "react";
import sd from "./img/sun-deck.png";
import up from "./img/UPPER-DECK.png";
import ld from "./img/LOWER-DECK.png";
import td from "./img/TERRACE-DECK.png";
import sd1 from "./img/sun-deck-1.png";
import up1 from "./img/UPPER-DECK-1.png";
import ld1 from "./img/LOWER-DECK-1.png";
import td1 from "./img/TERRACE-DECK-1.png";
import sd2 from "./img/sun-deck-2.png";
import up2 from "./img/UPPER-DECK-2.png";
import ld2 from "./img/LOWER-DECK-2.png";
import td2 from "./img/TERRACE-DECK-2.png";
import DaySelector from "./dayDropdown";
import Dropdown from "./deckDropdown";
import TimeSel from "./TimeSelector";
//import RHmap from "react-heatmap/dist/react-heatmap.js";

const images = {
  lower: ld,
  upper: up,
  sun: sd,
  terrace: td,
  lower1: ld1,
  upper1: up1,
  sun1: sd1,
  terrace1: td1,
  lower2: ld2,
  upper2: up2,
  sun2: sd2,
  terrace2: td2
};

//const ReactHeatmap = require('react-heatmap');
// const data = [
//   { x: 10, y: 15, value: 5 },
//   { x: 50, y: 50, value: 2 }
// ];
var offset = 0;
var d = 0;
const Ship = props => {
  const [name, setName] = useState("lower");

  const onSelectDeck = deck => {
    const keys = Object.keys(images);
    d = deck - 1;
    setName(keys[offset * 4 + d]);
  };
  const onSelectDay = deck => {
    offset = deck - 1;
    console.log(offset);

    const keys = Object.keys(images);
    setName(keys[offset * 4 + d]);
  };
  return (
    <div>
      <Dropdown onChange={onSelectDeck} />
      <DaySelector onChange={onSelectDay} />
      <TimeSel />
      {/* <ReactHeatmap max={5} data={data} /> */}
      <img src={images[name]} alt="ouch" />
    </div>
  );
};

export default Ship;
