import React, { useState } from "react";

const UseStateCounter = () => {
  //? local variable
  // let counter = 0

  //? useState
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    // counter = counter +1
    setCounter(counter + 1);
    // console.log(counter);
  };

  const handleDec = () => {
    setCounter(counter - 1);
  };

  const handleClr =()=>{
    setCounter(counter )
  }

  return (
    <div>
      <h2>UseState Counter</h2>
      <h1>Count: {counter}</h1>
      <button onClick={handleInc}>INC</button>
      <button onClick={handleClr}>CLR</button>
      <button onClick={handleDec}>DEC</button>
    </div>
  );
};

export default UseStateCounter;
