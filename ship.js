import React, { useState } from "react";
import sd from "./sun-deck.png";
import up from "./UPPER-DECK.png";
import ld from "./LOWER-DECK.png";
import td from "./TERRACE-DECK.png";
import Dropdown from "./deckDropdown";

const images = {
  lower: ld,
  upper: up,
  sun: sd,
  terrace: td
};

const Ship = props => {
  const [name, setName] = useState("lower");
  const onSelectDeck = deck => {
    const keys = Object.keys(images);
    setName(keys[deck - 1]);
  };
  return (
    <div>
      <Dropdown onChange={onSelectDeck} />
      <img src={images[name]} alt="ouch" />
    </div>
  );
};

export default Ship;
