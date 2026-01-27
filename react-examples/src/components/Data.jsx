import { useState } from "react";
import React from "react";

const Data = () => {
  let number = 10;
  const [anotherNumber, setAnotherNumber] = useState(15);
  return (
    <div>
      <div>
        <p>Valor: {anotherNumber} </p>
        <button onClick={() => setAnotherNumber(20)}>Mudar variavel</button>
      </div>
    </div>
  );
};

export default Data;
