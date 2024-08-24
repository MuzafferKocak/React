import React, { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {

    const [tutorials, setTutorials] = useState([])


  const getTutorials = async () => {
    

    try {
        // const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    const res = await axios(process.env.REACT_APP_URL);
    console.log(res.data);
    setTutorials(res.data)
    } catch (error) {
        console.log(error);
    }
   
  };

  //? componentDidMount (nach dem ersten rendern, einmal Anfrage senden)
  useEffect(()=>{
    getTutorials()
  }, [])

//   getTutorials()

  return (
    <>
      <AddTutorial getTutorials={getTutorials}/>
      <TutorialList tutorials = {tutorials}/>
    </>
  );
};

export default Home;
