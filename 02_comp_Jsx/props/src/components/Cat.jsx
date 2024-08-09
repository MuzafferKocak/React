//* React import ist nicht mehr erforderlich
// import React from "react"

//* Named export in geschweifte klammern, gleicher Name
import { Name } from "./Name";

//? components werden function dec. || arrow func. erstellen

const Cat = ({ name, img, color = "grey", isBlueEyed }) => {
  //? destraction
  // const {name,img,color}= props
  return (
    //* JSX ausdrücke wenn mehr als ein ausdruck ist muss dieser von einem übergeordneten Ausdruck umgeben sein.
    <div>
      <Name name={name} />
      {/* //* In JSX können wir kein if/else benutzen, nur Ternary benutzen */}
      <p>Blue Eyed ? : {isBlueEyed ? "Yes" : "No"}</p>

      <img src={img} alt="cat-img" height="300px" />
      <p style={{ backgroundColor: color }}>Color: {color}</p>
      <hr />
    </div>
  );
};

export default Cat;

// const Cat =(props)=>{
//     return(
//         //* JSX ausdrücke wenn mehr als ein ausdruck ist muss dieser von einem übergeordneten Ausdruck umgeben sein.
//         <div>
//         <Name/>

//         <img src={props.img} alt="cat-img" height="300px" />
//         <p style={{backgroundColor: props.color}}>Color: {props.color}</p>
//         <hr />

//         </div>
//     )
// }

// export default Cat
