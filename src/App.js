import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?11111",
    content: "React is a front end javascript framework",
  },
  {
    title: "What is React?2222",
    content: "React is a front end javascript framework",
  },
  {
    title: "What is React?3333",
    content: "React is a front end javascript framework",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toogle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
      <p style={{color: selected.value}}>This text is {selected.value}</p> */}
      <Translate />
    </div>
  );
};
