import { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import spinner from "../img/Spinner-2.gif"

const PersonDetail = () => {
  const [person, setPerson] = useState([]);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const {id} = useParams()
  const navigate = useNavigate()

  
  console.log(id)
  const getPerson = () => {
    setLoading(true)
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok){
            setError(true)
            setLoading(false)
            throw new Error("User can not be found")
        }
        return res.json()

      })
      .then((data) => {
        setLoading(false)
        setPerson(data.data)
      })
      .catch((err) => console.log(err))
  };
  useEffect(() => {
    getPerson();
  }, []);  


  //? >Conditional Rendering

  if (loading) {
    return (
      <div className="text-center">
        <img src={spinner} alt="" />
      </div>
    )
  } else if (error) {
    return <NotFound />
  } else {
    return (
    
        <div className="container text-center mt-4">
          <h1>Person Detail</h1>
          <img className="rounded" src={person?.avatar} alt="img" />
          <div className="row justify-content-center g-3">
            <h6>
              {person?.first_name} {person?.last_name}
            </h6>
            <p>{person?.email}</p>
            <div className="mt-3">
                <button className="btn btn-danger me-2 " onClick={()=> navigate(-1)}>Back</button>
                <button className="btn btn-success" onClick={()=> navigate("/")}>Home</button>
            </div>
          </div>
        </div>
      );
}
  
};

export default PersonDetail;
