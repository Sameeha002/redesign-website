import React from "react";
import './Card.css'

const Card = ({props}) => {
  return (
    <div className="blog-card" >
      <img
        className="blogcard-img-top"
        src={props.image}
        alt="Card"
      />
      <div className="blogcard-body">
        <h5>{props.title}</h5>
        <p>
          {props.text}
        </p>
        
      </div>
    </div>
  );
};

export default Card;
