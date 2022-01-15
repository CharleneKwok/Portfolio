import React from "react";
import "./Card.css";
import Title from "./Title";

const Card = (props) => {
  const classes = "card " + props.className;
  const pics = props.pic;
  return (
    <div className={classes}>
      <img src={pics.from} width="100%" className="card_img" />
      <span className="card__backdrop" />
      <div className="card__buttons">
        <Title text="Code" link={pics.code} />
        <Title text="Link" link={pics.link} />
      </div>
    </div>
  );
};

export default Card;
