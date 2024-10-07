import { useState, useRef } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";


function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState("Mustermann")
  const [taxDataState, setTexDataState] = useState({
    taxRate: 0.18,
    ship: 25
  })

  // const taxData = {
  //   taxRate: 0.18,
  //   ship: 25
  // }

  const taxDataRef = useRef({
    taxRate: 0.18,
    ship: 25
  })
  // console.log(taxDataRef);

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
      <HeaderMemo user={user}/>
      <div className="">
        
        <button className='btn btn-danger d-flex mx-auto' onClick={() => setUser("Max")}>Change Name</button>
      </div>
      <hr />
      {/* <TaxComp taxData={taxData} /> */}
      {/* <TaxComp taxData={taxDataState} /> */}
      <TaxComp taxData={taxDataRef} />
    </div>
  );
}

export default App;