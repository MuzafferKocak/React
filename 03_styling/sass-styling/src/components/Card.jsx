import React from "react";
import Cardstyle from "../sass/card.module.scss";

const Card = ({ name, job, comment, img }) => {
    
  return (
    <div className="container">
      <div className={Cardstyle["card"]}>
        <h1>{name}</h1>
        <h3>{job}</h3>
        <p>{comment}</p>
        <img src={img} alt={name} />
        <div className={Cardstyle["buttons"]}>
          <button className={Cardstyle["small"]}>Small</button>
          <button className={Cardstyle["large"]}>Large</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
