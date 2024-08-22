//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! Nebenwirkungen von UseEffect Hook auf Funktionskomponenten
//! Es wird verwendet, um (Side effect) zu realisieren.
//! ComponentDidMount, ComponentDidUpdate und ComponentWillUnmount
//! Man kann es sich als eine Kombination von Methoden vorstellen.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Code
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("2-componentDidMount");
  //     //* clean-up funct. Es funktioniert, nachdem die Komponente aus dem DOM-Baum entfernt wurde.
  //     return () => {
  //       console.log("4-componentWillUnmount");
  //     };
  //   }, []);  //? weil der dependency array leer ist, wird der hauptteil der funktion nach dem ersten Rendern nur einmal eusgeführt.

  //? componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log("2-componentDidMount");
    console.log("2-componentDidUpdate");
  }, [count]); //? jedes mal wenn sich der count state ändert, wird der hauptteil der funktion erneut ausgeführt. in diesem fall wird der mounting und updating aktualisiert.

  //? componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Unmounting");
    };
  }, []);

  console.log("1-Rendering");

  return (
    <div className="container text-center">
      <h1 className="text-danger">USE EFFECT METHODS</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
