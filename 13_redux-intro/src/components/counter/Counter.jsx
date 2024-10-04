import { useSelector, useDispatch } from "react-redux";
import "./Counter.css";
import { dec, inc, reset } from "../../store/counterReducer";

const Counter = () => {
  //? Der useSelector-Hook wird zum Lesen von Daten aus dem globalen State verwendet

  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();
  console.log(count);

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button
          className="counter-button positive"
        //   onClick={() => dispatch({ type: "INC" })}
          onClick={() => dispatch({ type: inc })}
        >
          increase
        </button>

        <button
          className="counter-button zero"
        //   onClick={() => dispatch({ type: "RESET" })}
          onClick={() => dispatch({ type: reset })}
        >
          reset
        </button>

        <button
          className="counter-button negative"
        //   onClick={() => dispatch({ type: "DEC" })}
          onClick={() => dispatch({ type: dec })}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
