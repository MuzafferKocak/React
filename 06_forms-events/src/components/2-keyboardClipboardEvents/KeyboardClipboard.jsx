import { useState } from 'react'

const KeyboardClipboard = () => {

    const [inputData, setInputData] = useState("")
    // console.log(inputData);

    const handleKeyDown = (e) => {
        console.log(e.keyCode)
        if (e.keyCode > 47 && e.keyCode < 58) {
          alert("a number pressed")
          e.preventDefault()
        }
      }

      const handleCopyArea = (e) => {
        alert("Dieser Text kann man nicht Kopieren")
        e.preventDefault() //? Kopierfunktion deaktiviert
      }

      const handleCutArea = (e) => {
        alert("Dieser Text kann man nicht Auschneiden ")
        e.preventDefault() //? Auschneid funktion deaktiviert
      }
        //* beim Einfügen man kann auch die schriftart, farbe und schriftgröße ändern
      const handlePasteArea = (e) => {
        e.target.style.fontFamily = "tahoma"
        e.target.style.fontSize = "1.4rem"
        e.target.style.color = "red"

      }


    

  return (
    <div className='container mt-4'>
        <h2>Keyboard Events</h2>


        <input 
        type="text" 
        className='form-control'
        onChange={(e)=> setInputData(e.target.value.toLocaleUpperCase())}
        value={inputData}
        onKeyDown={handleKeyDown}
        
         />

        <div className='mt-3'>
            <p>{inputData.toLocaleLowerCase()}</p>
        </div>

        <div>
            <textarea 
            className='form-control'
            name="textarea" 
            id="area"
            cols="30"
            rows="10"
            onCopy={handleCopyArea}
            onCut={handleCutArea}
            onPaste={handlePasteArea}
            ></textarea>
        </div>
    </div>
  )
}

export default KeyboardClipboard