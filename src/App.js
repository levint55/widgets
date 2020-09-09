import React from "react";
import Accordion from "./components/Accordion";

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

export default () => {
  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
};
