import React, {memo} from 'react'

const TaxComp = ({taxData}) => {
  console.log("Render => TextData ")
  return (
    <div>TaxComp</div>
  )
}

export default memo(TaxComp)