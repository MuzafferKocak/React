import React from 'react'

const Event = () => {
  //? Local
let nachricht = "Wilkommen FS16"

  //* Event handler function
  const handleClick = (e)=>{
    alert("Geklickt")
    console.log(e);
    console.log("ID:", e.target.id);
    console.log("Name:", e.target.name);
    
  }
function handleExit(msg) {
console.log(msg);
}


const handleÄndern = function(){
nachricht = "Hallo React Freunde"
console.log(nachricht);
}
  return (
    <div>
    <h1>Events</h1>


     {/* //* Event */}
    <button onClick={handleClick} id='btn' name='my-button'>Klicken</button>


{/* //* wenn eine event funktion einen Parameter bönetigt, muss diese funktion von einer arrow funktion aufgerufen werden */}
    <button onClick={() => alert("Gelöscht")}>Löschen</button>

    <button onClick={() => handleExit(nachricht)}>Exit</button>

    <button onClick={handleÄndern}>Ändern</button>

    <p>{nachricht}</p>

    </div>
  )
}

export default Event