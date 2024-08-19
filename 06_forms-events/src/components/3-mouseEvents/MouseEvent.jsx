import { useState } from "react";

const MouseEvent = () => {
  const [visible, setVisible] = useState(false);

  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();

  const handleDoubleClick = (e) => {
    e.target.classList.toggle("bg-danger")
  }

  //? mouseMove event
  const handleMouseMove = (e) => {
    //? Absolute Koordinaten
    // console.log("X:", e.pageX)
    // console.log("Y:", e.pageY)
    // setCoordX(e.pageX)
    // setCoordY(e.pageY)

    //? Relative Koordinaten
    // console.log("RX:", e.nativeEvent.offsetX)
    // console.log("RY:", e.nativeEvent.offsetY)

    setCoordX(e.nativeEvent.offsetX)
    setCoordY(e.nativeEvent.offsetY)
  }

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4 my-4"
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        todo item 1
      </div>
      {/* //* Conditional Rendering */}
      <p>{visible && <span>Für Details..</span>}</p>

      <div id="todo-2" 
      className="bg-success text-light w-50 p-4 my-4"
      onDoubleClick={handleDoubleClick}
      >
        todo item 2
      </div>

      <div id="todo-3" 
      className="bg-success text-light w-50 p-4 my-4"
      onMouseMove={handleMouseMove}
      >
        todo item 3
      </div>

      <p>X: {coordX} and Y: {coordY}</p>
    </div>
  );
};

export default MouseEvent;
