import React, {memo} from 'react'

const ClearButton = memo(({handleClear}) => {
  console.log("render => ClearButton Comp");
  return (
    <div>Clear Button Comp:
    
    <button className='btn btn-success m-4' onClick={handleClear}> Clear Button

    </button>
    </div>
  )
}
)

export default ClearButton