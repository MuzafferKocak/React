import { useState, useRef, useEffect, useMemo } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";
import UseRefComp from "./components/UseRefComp";
import axios from "axios"
import Card from "./components/Card";


function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("Mustermann");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [taxDataState, setTexDataState] = useState({
    taxRate: 0.18,
    ship: 25,
  });

  // const taxData = {
  //   taxRate: 0.18,
  //   ship: 25
  // }

  const taxDataRef = useRef({
    taxRate: 0.18,
    ship: 25,
  });
  // console.log(taxDataRef);

  const getData = async ()=>{
    const {data} = await axios.get("https://dummyjson.com/products")
    // console.log(data);
    setData(data.products)

  }
useEffect(() => {
 getData()
}, [])

// const filteredData = data.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))

const filteredMemoData = useMemo(() => {
  console.log("use Memo Rendering");
  return data.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
}, [data, search])

  return (
    <div className="container mt-2">
      <div>
        <Header />
      </div>
      <hr />
      <div className="">
        <p className="text-center">Count : {count}</p>
        <button
          className="btn btn-danger d-flex mx-auto"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      <hr />
      <HeaderMemo user={user} />
      <div className="">
        <button
          className="btn btn-danger d-flex mx-auto"
          onClick={() => setUser("Max")}
        >
          Change Name
        </button>
      </div>
      <hr />
      {/* <TaxComp taxData={taxData} /> */}
      {/* <TaxComp taxData={taxDataState} /> */}
      <TaxComp taxData={taxDataRef} />

      <hr />
      {/* <UseRefComp /> */}
      <hr />
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* <Card data={filteredData}/> */}
      <Card data={filteredMemoData}/>
    </div>
  );
}

export default App;
