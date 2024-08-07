
//* React import ist nicht mehr erforderlich
// import React from "react"

//* Named export in geschweifte klammern, gleicher Name
import { Name } from "./Name"

//? components werden function dec. || arrow func. erstellen

const Cat =()=>{
    return(
        //* JSX ausdrücke wenn mehr als ein ausdruck ist muss dieser von einem übergeordneten Ausdruck umgeben sein.
        <div>
        <Name/>
        
        <img src="https://cdn.pixabay.com/photo/2019/10/18/09/29/cat-4558651_1280.jpg" alt="cat-img" height="300px" />
        <p>Color: Gray</p>
        <hr />

        </div>
    )
}

export default Cat