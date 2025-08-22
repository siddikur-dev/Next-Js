import React from "react";

import { useState } from "react";
const state = () => {
  const [value, setValue] = useState(0);
  const add = () => {
    setValue(value + 1);
  };
  const minus = () => {
    setValue(value - 1);
  };
  const reset = () => {
    setValue("");
  };
  return (
    <div>
      <h2 className="btn-primary">Count Here : {value}</h2>
      <button onClick={add}>Add</button>
      <button onClick={minus}>Minus</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default state;
