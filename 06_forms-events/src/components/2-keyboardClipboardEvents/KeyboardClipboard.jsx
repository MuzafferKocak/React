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
            ></textarea>
        </div>
    </div>
  )
}

export default KeyboardClipboard