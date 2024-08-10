import React from 'react'

const Card = ({name, job, comment, img}) => {
  return (
    <div className='container'>
    <div className='card'>
    <h1>{name}</h1>
    <h3>{job}</h3>
    <p>{comment}</p>
    <img src={img} alt={name} />
    <div className='buttons'>
    <button className='small'>Small</button>
    <button className='large'>Large</button>

    </div>


    </div>

    </div>
  )
}

export default Card