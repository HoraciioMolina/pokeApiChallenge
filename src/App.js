import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Layout from "./containers/Layout";
import Home from "../src/containers/Home";

import "./App.scss";
import PokemonDetails from "./containers/PokemonDetails";

const App = (props) => {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          path="/pokemonDetails"
          render={(props) => {
            return <PokemonDetails {...props} />;
          }}
        />
      </Layout>
    </Switch>
  );
};

export default withRouter(App);
