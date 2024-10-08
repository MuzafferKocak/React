import React, { useState, useEffect } from 'react'

const User = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        dob: "",
        picture: "",
        country: "",
        cell: "",

    })

    const getUser = async () => {
        const res = await fetch("https://randomuser.me/api/")
        const data = await res.json()
        console.log(data.results[0]);
        setUserData(data.results[0])

    }
    //? componentDidMount
    useEffect(() => {
        const timerID = setInterval(getUser, 5000)
      getUser()

      //? componentWillUnmount
      return () => {
        clearInterval(timerID)
      }
    }, []) //? dependency array
    
    console.log(userData);
    // getUser() //* endlosschleife, wenn mann so ausruft!
  return (
    <div className=''>
        <img className='rounded-circle m-4' src={userData.picture.large} alt="" />
        <p>Hi My Name is</p>
        <h2>{userData?.name?.first + " " + userData.name.last }</h2>
        <h4>{userData.email}</h4>
        <h5>{userData.dob.age}</h5>
        <h4>{userData.location?.country}</h4>
        <h6>{userData.cell}</h6>

        <button className='btn btn-warning m-4' onClick={getUser}>new user</button>
    </div>
  )
}

export default User