import { useState } from "react";
import Header from "./components/Header";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mt-2">
      <div>
        <Header />
      </div>
      <hr />
      <div className="">
        <p className="text-center">Count : {count}</p>
        <button className='btn btn-danger d-flex mx-auto' onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <hr />
      
    </div>
  );
}

export default App;