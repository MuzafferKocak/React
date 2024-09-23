import React from 'react'

const SpacingAndSizing = () => {
  return (
    <>
    <div>
    <h3 className='text-center text-2xl '>Spacing and Sizing</h3>
    <button className='bg-blue-500 text-white p-4 m-1'>Klick</button>
    <button className='bg-blue-500 text-white px-4 '>Klick</button>
    <button className='bg-blue-500 text-white px-4 ms-4 '>Klick</button>
    <button className='bg-blue-500 text-white px-4 ml-4 '>Klick</button>
    <button className='bg-blue-500 text-white px-4 py-2 mx-4 '>Klick</button>
    </div>
    <div>
        <button className='bg-green-500 text-white mx-4 px-4 py-2 border border-red-500 rounded-md'>Klick</button>
        <button className='bg-green-500 text-white mx-4 px-4 py-2 border-[3px] border-red-500 rounded-[10px]'>Klick</button>
        <button className='bg-green-500 text-white mx-4 px-4 py-4 w-20 h-20 border-[3px] rounded-full'>Klick</button>
        <button className='bg-green-500 text-white mx-4 px-4 py-4 w-20 h-20 border-[3px] rounded-[50%]'>Klick</button>
    </div>
    <div>
        <button className='bg-indigo-300 rounded-full py-2 mx-1 w-20'>Klick</button>
        <button className='bg-indigo-300 rounded-full py-2 mx-1 w-1/2'>Klick</button>
        <button className='bg-indigo-300 rounded-full py-2 mx-1 w-[300px]'>Klick</button>
    </div>
    </>
  )
}

export default SpacingAndSizing