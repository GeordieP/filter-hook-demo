import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const LETTERS = ["F", "S", "T"];

export default function StartsWithFilter({ addOrUpdateFilter }) {
  const [letter, setLetter] = useState("");

  const selectLetter = e => {
    const newLetter = e.target.value;

    addOrUpdateFilter(
      "startsWith",
      val => val.toLowerCase()[0] === newLetter.toLowerCase()
    );

    setLetter(letter);
  };

  useEffect(() => {
    // only update filter initial value if we've got something selected by default
    if (letter.length > 0) {
      addOrUpdateFilter(
        "startsWith",
        val => val.toLowerCase()[0] === letter.toLowerCase()
      );
    }
  }, []); // pass an empty array here so we only run this on component mount

  const isSelected = l => l.toLowerCase() === letter.toLowerCase();

  return (
    <RadioButtons>
      {LETTERS.map(l => (
        <RadioBtn
          value={l}
          defaultChecked={isSelected(l)}
          onChange={selectLetter}
        />
      ))}
    </RadioButtons>
  );
}

function RadioBtn(props) {
  return (
    <div className="u-flexH u-centerBoth">
      <PaddedLabel>{props.value}</PaddedLabel>
      <input type="radio" name="startsWith" {...props} />
    </div>
  );
}

const PaddedLabel = styled.label`
  padding: 0 4px;
`;

const RadioButtons = styled.span`
  display: flex;
  justify-content: space-around;
`;
