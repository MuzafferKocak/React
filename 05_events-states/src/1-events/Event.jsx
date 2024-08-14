import React from 'react'

const Event = () => {


  //* Event handler function
  const handleClick = (e)=>{
    alert("Geklickt")
    console.log(e);
    console.log("ID:", e.target.id);
    console.log("Name:", e.target.name);
    
  }


  return (
    <div>
    <h1>Events</h1>


     {/* //* Event */}
    <button onClick={handleClick} id='btn' name='my-button'>Klicken</button>


{/* //* wenn eine event funktion einen Parameter bönetigt, muss diese funktion von einer arrow funktion aufgerufen werden */}
    <button onClick={() => alert("Gelöscht")}>Löschen</button>
    </div>
  )
}

export default Event