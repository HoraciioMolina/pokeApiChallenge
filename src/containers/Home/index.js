import React from "react";
import { withRouter } from "react-router";
import CardListPokemons from "../../components/listCardsPokemons";

const Home = (props) => {
  return (
    <div className="home-container">
      <CardListPokemons />
    </div>
  );
};

export default withRouter(Home);
