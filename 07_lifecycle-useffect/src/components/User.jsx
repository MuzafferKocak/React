import React, { useState } from 'react'

const User = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        dob: "",
        picture: "",
        city: "",
        cell: "",

    })

    const getUser = async () => {
        const res = await fetch("https://randomuser.me/api/")
        const data = await res.json()
        console.log(data.results[0]);

    }

    getUser()
  return (
    <div>
        <img src="" alt="" />
        <p>Hi My Name is</p>
        <h2>name surname</h2>
        <h4>email</h4>
        <h4>date</h4>
        <h4>city</h4>
        <h4>telephone</h4>

        <button className='btn btn-warning' onClick={getUser}>new user</button>
    </div>
  )
}

export default User