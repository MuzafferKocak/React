import React, {memo} from 'react'

const TaxComp = ({taxData}) => {
  console.log("Render => TextData ")
  console.log(taxData)
  return (
    <div>TaxComp</div>
  )
}

export default memo(TaxComp)