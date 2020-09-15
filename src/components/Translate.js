import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Indonesia",
    value: "id",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Set a Language"
      />
      <hr />
      <h3 className="ui header"> Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
