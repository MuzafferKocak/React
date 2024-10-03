import { useSelector, useDispatch } from "react-redux"
import "./Counter.css"

const Counter = () => {


    //? Der useSelector-Hook wird zum Lesen von Daten aus dem globalen Status verwendet

   const count = useSelector((state)=> state.count)

   const dispatch = useDispatch()
   console.log(count);


  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button className="counter-button positive" onClick={()=> dispatch({type: "INC"})}>increase</button>

        <button className="counter-button zero" onClick={()=> dispatch({type: "RESET"})}>reset</button>

        <button className="counter-button negative" onClick={()=> dispatch({type: "DEC"})}>decrease</button>
      </div>
    </div>
  )
}

export default Counter