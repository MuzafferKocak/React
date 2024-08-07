
//* React import ist nicht mehr erforderlich
// import React from "react"

//* Named export in geschweifte klammern, gleicher Name
import { Name } from "./Name"

//? components werden function dec. || arrow func. erstellen

const Cat =({name, img, color})=>{
    //? destraction
    // const {name,img,color}= props
    return(
        //* JSX ausdrücke wenn mehr als ein ausdruck ist muss dieser von einem übergeordneten Ausdruck umgeben sein.
        <div>
        <Name name={name}/>
        
        <img src={img} alt="cat-img" height="300px" />
        <p style={{backgroundColor: color}}>Color: {color}</p>
        <hr />

        </div>
    )
}

export default Cat

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