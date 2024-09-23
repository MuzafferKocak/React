import React from 'react'

const FlexAndResponsive = () => {
  return (
    <>
    <div>
    <h3 className='text-center text-2xl'>Flex and Responsive</h3>
    </div>
    <div className='flex flex-row flex-wrap' >
        <div className='basis-1/4 bg-fuchsia-200'>01</div>
        <div className='basis-1/4 bg-fuchsia-300'>02</div>
        <div className='basis-1/4 bg-fuchsia-400'>03</div>
        <div className=' basis-1/4 bg-fuchsia-500'>04</div>
        <div className='basis-2/4 bg-fuchsia-600'>05</div>
        <div className='basis-2/4 bg-fuchsia-700'>06</div>
    </div>
    </>
  )
}

export default FlexAndResponsive