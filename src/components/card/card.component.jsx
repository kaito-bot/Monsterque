import React from "react";
import "./card.styling.css";

export const Card = (props) => {
  return (
    <div className="cards" onClick = {props.onClickCard}>
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`}
        alt="monster"
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
