import { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";

const PersonDetail = () => {
  const [person, setPerson] = useState([]);
  const {id} = useParams()
  const navigate = useNavigate()

  

  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div className="container text-center mt-4">
      <h1>Person Detail</h1>
      <img className="rounded" src={person?.avatar} alt="img" />
      <div className="row justify-content-center g-3">
        <h6>
          {person?.first_name} {person?.last_name}
        </h6>
        <p>{person?.email}</p>
        <div className="g-2">
            <button className="btn btn-danger" onClick={()=> navigate(-1)}>Back</button>
            <button className="btn btn-success" onClick={()=> navigate("/")}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default PersonDetail;
