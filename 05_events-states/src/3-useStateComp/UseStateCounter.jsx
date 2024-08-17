import React, { useState } from "react";


//! Mit Hooks können wir Zustände innerhalb funktionaler Komponenten verwenden.
//! Dies sind spezielle Funktionen, die es ermöglichen
//! Es kam mit der React-Version 16.8 und nach ihrer Einführung ist die nutzung von Class-Komponenten deutlich zurückgegangen.


//? Es gibt in React auch andere Hooks wie useState(), useEffect(), useContext().
//? Es ist auch möglich, einen benutzerdefinierten Hook zu definieren.
//? https://react.dev/reference/react/hooks#state-hooks

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

      {/* //* Inline */}
      <button onClick={()=> setCounter(0)}>CLR</button>
      <button onClick={()=> setCounter( counter -1)}>DEC</button>
    </div>
  );
};

export default UseStateCounter;
