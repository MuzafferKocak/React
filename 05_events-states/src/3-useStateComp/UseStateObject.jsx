import React, { useState } from 'react'

const UseStateObject = () => {
  //? State definition
  // const [name, setName]= useState("Max")
  // const [nachName, setNachname]= useState("Müller")
  // const [beruf, setBeruf]= useState("Developer")
  // const [lohn, setLohn]= useState(2500)

  const [person, setPerson]= useState({
    name: "Max",
    nachName: "Müller",
    beruf: "Developer",
    lohn: 2500,
    stimmung: "Glücklich",
  })
  console.log(person);

  const [toggle, setToggle] = useState(true)

  const handleStimmung=()=>{
    setPerson({...person, stimmung: toggle ? "Traurig" : "Glücklich"})
    setToggle(!toggle)
  }

  // const NameWechsel = ()=>{
  //   setName("Martin")
  // }



  return (
    <div>
        <h1>UseState Object Example</h1>
        <h2>NAME: {person.name}</h2>
        <h2>NACHNAME: {person.nachName}</h2>
        <h2>BERUF: {person.beruf}</h2>
        <h2>LOHN: {person.lohn}</h2>

        <h3>Stimmung: {person.stimmung} </h3>

        <button onClick={()=> setPerson({...person, name: "Martin"})}>Name wechseln</button>
        <button onClick={()=> setPerson({...person,nachName: "Mustermann"})}>Nachname wechseln</button>
        <button onClick={()=> setPerson({...person, beruf: "Tester"})}>Beruf wechseln</button>
        <button onClick={()=> setPerson({...person, lohn: person.lohn + 1000})}>Lohn erhöhen </button>
        <button onClick={()=> setPerson({...person, lohn: person.lohn - 1000})}>Lohn reduzieren </button>
        <button onClick={handleStimmung}>Glücklich/Traurig</button>
    </div>
  )
}

export default UseStateObject