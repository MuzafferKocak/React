import Card from "./components/card/Card";
import data from "./data";



function App() {
  console.log(data);
  return (
    <div className="App">
      <h2 style={{textAlign: "center"}}>LANGUAGES</h2>
    {/* //* wenn mehr als eine anweisung verwendet wird, in geschweifte klammern und return schlüsselwort verwenden */}

    {/* //!Rendering Lists */}
    {/* //*Each child in a list should have a unique "key" prop. React will jedes element in der liste ein uniqe key haben  */}
      {
        data.map((item,i)=>{
          return <Card key={item.id} lang={item.language} img={item.img} />
        })
      }
      


      {/* <Card lang={data[0].language} img={data[0].img}/>
      <Card lang={data[0].language} img={data[1].img}/>
      <Card lang={data[0].language} img={data[2].img}/> */}
    </div>
  );
}

export default App;
