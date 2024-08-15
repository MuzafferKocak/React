import React, { useState } from "react";

const UseStateCounter = () => {
  //? local variable
  // let counter = 0

  //? useState Hook
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    // counter = counter +1
    setCounter(counter + 1);
    // console.log(counter);
  };

  //* hier haben wir Inline gemacht
//   const handleDec = () => {
//     setCounter(counter - 1);
//   };

  

  return (
    <div>
      <h2>UseState Counter</h2>
      <h1>Count: {counter}</h1>
      <button onClick={handleInc}>INC</button>
      <button onClick={()=> setCounter(0)}>CLR</button>
      <button onClick={()=> setCounter( counter -1)}>DEC</button>
    </div>
  );
};

export default UseStateCounter;
