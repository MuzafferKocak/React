import React, {memo} from 'react'

const HeaderMemo = memo(({user}) => {
    console.log("Render => HeaderMemo ")
  return (
    <div className='text-center text-success'>HeaderMemo : {user} </div>
  )
})

export default HeaderMemo