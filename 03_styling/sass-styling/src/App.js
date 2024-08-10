import Card from "./components/Card";
import Header from "./components/Header";
//? SCSS stylesheet import
import "./sass/app.scss";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      {data.map(({ id, name, job, img, comment }) => (
        <Card key={id} name={name} job={job} img={img} comment={comment} />
      ))}
    </div>
  );
}

export default App;
