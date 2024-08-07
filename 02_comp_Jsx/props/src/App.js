
//? deafult export
import Cat from './components/Cat';

function App() {
  return (
    <div className="App">
      <Cat 
      name="Cenitin" 
      img="https://cdn.pixabay.com/photo/2019/10/18/09/29/cat-4558651_1280.jpg"
      color="grey"
      isBlueEyed={true}
      />
      <Cat 
        name="Garfield" 
      img="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_1280.jpg"
      color="orange"
      isBlueEyed={false}
      />
      <Cat 
        name="Sammy" 
      img="https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_1280.jpg"
      isBlueEyed={false}
      
      />
    </div>
  );
}

export default App;
