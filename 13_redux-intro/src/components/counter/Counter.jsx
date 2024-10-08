import { useSelector, useDispatch } from "react-redux";
import "./Counter.css";
import {
  dec,
  decrease,
  inc,
  increase,
  res,
  reset,
} from "../../store/counterReducer";

const Counter = () => {
  //? Der useSelector-Hook wird zum Lesen von Daten aus dem globalen State verwendet

  //   const count = useSelector((state) => state.counter.count);
  const { count } = useSelector((state) => state.counter);

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
          //   onClick={() => dispatch({ type: inc })}
          onClick={() => dispatch(increase())}
        >
          increase
        </button>

        <button
          className="counter-button zero"
          //   onClick={() => dispatch({ type: "RESET" })}
          //   onClick={() => dispatch({ type: reset })}
          onClick={() => dispatch(res())}
        >
          reset
        </button>

        <button
          className="counter-button negative"
          //   onClick={() => dispatch({ type: "DEC" })}
          //   onClick={() => dispatch({ type: dec })}
          onClick={() => dispatch(decrease())}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
