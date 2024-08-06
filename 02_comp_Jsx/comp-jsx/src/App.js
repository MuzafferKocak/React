

//? App Component

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="App">
    <h1>APP</h1>
    {/* //? Header component wurde aufgerufen */}
    <Header/>
    
    <Main/>

    <Footer/>
      
    </div>
  );
}

export default App;
