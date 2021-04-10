import React from "react";
import { formatThreeIntegerDigits } from "../../../assets/shared/formatsNumber";

const index = (props) => {
  const { onClick, imageUrl, name, id } = props;

  return (
    <div className="pokemon-card-container" onClick={() => onClick(id)}>
      <div className="pokemon-card-container-image">
        <img alt="" src={imageUrl} />
      </div>
      <div className="pokemon-card-container-info">
        <div className="pokemon-card-container-info-name">{name}</div>
        <div className="pokemon-card-container-info-id">{`#${formatThreeIntegerDigits(
          id
        )}`}</div>
      </div>
    </div>
  );
};

export default index;
