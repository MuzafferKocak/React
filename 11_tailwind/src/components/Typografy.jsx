import React from 'react'

const Typografy = () => {
  return (
    <div>
    {/* //* Typografy */}
    <h3 className='text-2xl '>Typografy</h3>
    <p className='text-sm '>Typografy</p>
    <p className='text-lg '>Typografy</p>
    <p className='text-xl '>Typografy</p>
    <p className='text-2xl '>Typografy</p>
    <h2 className='text-3xl '>Typografy</h2>
    <h3 className='text-4xl '>Typografy</h3>
    <h3 className='text-[60px] '>Typografy</h3>
    <h1 className='text-base/8 '>Typografy</h1>


    {/* //* Line Clamp */}
    <article>
        <p className='line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorum doloribus minus, commodi velit est expedita ut accusamus! Natus, rerum earum eveniet nemo incidunt maiores. Tempore asperiores quidem vitae quibusdam.</p>
    </article>

    <p className='text-center'>Hello</p>
    <p className='underline'>Hello</p>
    <p className='line-through'>Hello</p>
    <p className='uppercase'>Hello</p>
    <p className='lowercase'>Hello</p>
    <p className='text-red-400'>Hello</p>
    <p className='text-red-900'>Hello</p>
    <p className='text-green-900'>Hello</p>
    <p className='text-[#1E0342] font-bold'>Hello</p>
    <p className='text-[rgb(154,200,2005)] font-bold'>Hello</p>
    <p className='bg-[rgb(154,200,2005)] font-bold'>Hello</p>
    <p className='bg-[#E1F7F5] font-bold'>Hello</p>
    </div>
  )
}

export default Typografy