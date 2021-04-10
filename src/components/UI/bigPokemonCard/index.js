import React from "react";
import {
  convertCmToFeetAndInches,
  convertToDecimal,
  convertToLbs,
  formatThreeIntegerDigits,
} from "../../../assets/shared/formatsNumber";

const BigPokemonCard = (props) => {
  const { pokemonDetail } = props;

  const {
    id,
    imageUrl,
    name,
    height,
    weight,
    types,
    abilities,
  } = pokemonDetail;

  const colorTypes = {
    fire: "type-fire",
    water: "type-water",
    poison: "type-poison",
    grass: "type-grass",
    default: "type-default",
  };

  const upperFirstLetter = (value) => {
    return value.length !== 0 && `${value[0].toUpperCase()}${value.slice(1)}`;
  };

  return (
    <div className="big-pokemon-card-container">
      <div className="big-pokemon-card-container-image">
        <img alt="" src={imageUrl} />
      </div>
      <div className="big-pokemon-card-container-detail">
        <div className="big-pokemon-card-container-detail-header">
          <div className="big-pokemon-card-container-detail-header-name">
            {upperFirstLetter(name)}
          </div>
          <div className="big-pokemon-card-container-detail-header-id">{`#${formatThreeIntegerDigits(
            id
          )}`}</div>
        </div>
        <div className="big-pokemon-card-container-detail-body">
          <div className="big-pokemon-card-container-detail-body-column">
            <div className="big-pokemon-card-container-detail-body-column-text">
              <div>Height</div>
              <div>{`${convertCmToFeetAndInches(height)} (${convertToDecimal(
                height
              )}m)`}</div>
            </div>
            <div className="big-pokemon-card-container-detail-body-column-text">
              <div>Weight</div>
              <div>{`${convertToLbs(weight)}lbs (${convertToDecimal(
                weight
              )}kg)`}</div>
            </div>
          </div>
          <div className="big-pokemon-card-container-detail-body-column">
            <div className="big-pokemon-card-container-detail-body-column-text">
              <div>Types</div>
              {types.map((type) => (
                <div
                  className={[
                    "big-pokemon-card-container-detail-body-column-text-type",
                    colorTypes[type] !== undefined
                      ? colorTypes[type]
                      : colorTypes.default,
                  ].join(" ")}
                >
                  {upperFirstLetter(type)}
                </div>
              ))}
            </div>
            <div className="big-pokemon-card-container-detail-body-column-text">
              <div>Abilities</div>
              {abilities.map((ability) => (
                <div>{ability}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigPokemonCard;
