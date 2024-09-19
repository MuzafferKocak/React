import { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const PersonDetail = () => {
  const [person, setPerson] = useState([]);
  const [error, setError] = useState(false)
  const {id} = useParams()
  const navigate = useNavigate()

  

  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok){
            setError(true)
            throw new Error("User can not be found")
        }
        return res.json()

      } )
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);  

  if(error){
    return <NotFound/>
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
                <button className="btn btn-danger " onClick={()=> navigate(-1)}>Back</button>
                <button className="btn btn-success" onClick={()=> navigate("/")}>Home</button>
            </div>
          </div>
        </div>
      );
}
  
};

export default PersonDetail;
