import { useState } from "react";

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
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
