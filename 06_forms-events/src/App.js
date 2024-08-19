// import Forms from "./components/1-forms/Forms";
// import {Container} from "react-bootstrap"
import Container from "react-bootstrap/Container"
import MouseEvent from "./components/3-mouseEvents/MouseEvent";
// import FormsObject from "./components/1-forms/FormsObject";
// import KeyboardClipboard from "./components/2-keyboardClipboardEvents/KeyboardClipboard";




function App() {
  return (
    <Container className=" mt-4">
      {/* <Forms/> */}
      {/* <FormsObject/> */}
      {/* <KeyboardClipboard/> */}
      <MouseEvent/>
    </Container>
  );
}

export default App;
