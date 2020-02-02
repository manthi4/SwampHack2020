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

import sd3 from "./img/sun-deck-3.png";
import up3 from "./img/UPPER-DECK-3.png";
import ld3 from "./img/LOWER-DECK-3.png";
import td3 from "./img/TERRACE-DECK-3.png";

import sd4 from "./img/sun-deck-4.png";
import up4 from "./img/UPPER-DECK-4.png";
import ld4 from "./img/LOWER-DECK-4.png";
import td4 from "./img/TERRACE-DECK-4.png";

import sd5 from "./img/sun-deck-5.png";
import up5 from "./img/UPPER-DECK-5.png";
import ld5 from "./img/LOWER-DECK-5.png";
import td5 from "./img/TERRACE-DECK-5.png";

import sd6 from "./img/sun-deck-6.png";
import up6 from "./img/UPPER-DECK-6.png";
import ld6 from "./img/LOWER-DECK-6.png";
import td6 from "./img/TERRACE-DECK-6.png";

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
  terrace2: td2,

  lower3: ld3,
  upper3: up3,
  sun3: sd3,
  terrace3: td3,

  lower4: ld4,
  upper4: up4,
  sun4: sd4,
  terrace4: td4,

  lower5: ld5,
  upper5: up5,
  sun5: sd5,
  terrace5: td5,

  lower6: ld6,
  upper6: up6,
  sun6: sd6,
  terrace6: td6
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
