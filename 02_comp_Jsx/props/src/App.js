
//? deafult export
import Cat from './components/Cat';

function App() {
  return (
    <div className="App">
      <Cat 
      name="Cenitin" 
      img="https://cdn.pixabay.com/photo/2019/10/18/09/29/cat-4558651_1280.jpg"
      color="grey"
      />
      <Cat/>
      <Cat/>
    </div>
  );
}

export default App;
