import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers"

function Guess({ value, answer }) {
  let classes = [];
  if (value) {
    console.log({ value, answer })
    classes = checkGuess(value, answer).map(g => g.status);
  }

  return (
    <>
      {range(5).map(letterKey => (
        <span className={["cell", classes[letterKey]].join(' ')} key={letterKey}>{(value[letterKey] || '')}</span>
      ))}
    </>
  );
}

export default Guess;
