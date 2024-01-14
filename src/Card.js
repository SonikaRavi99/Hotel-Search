import React from "react";
import "./Card.css";

function Card(props) {
  return props.data?.map((item) => {
    console.log("props", item);
    return (
      <article className="card">
        <img
          src={item.image}
          alt="Hot air balloons"
          style={{ width: 340, marginTop: 40, height: 260, borderRadius: 10 }}
        ></img>
        <h3 style={{ color: '#1A1A1A'}}>{item.name}</h3>
        <p>Location :{item.location}</p>
        <p>Price :{item.price}</p>
        <p>
          {item.freeBreakfast === true ? (
            <span style={{ color: "green" }}>Free Breakfast </span>
          ) : (
            <span style={{ color: "red" }}> No free Breakfast</span>
          )}
        </p>
      </article>
    );
  });
}

export default Card;
