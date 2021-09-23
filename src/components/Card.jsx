import React from "react";
import Emoji from "./Emoji";
import Title from "./Title";
import Meaning from "./Meaning";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <Emoji emoji={props.emoji} />
        <Title name={props.name} />
      </dt>
      <Meaning meaning={props.meaning} />
    </div>
  );
}
export default Card;
