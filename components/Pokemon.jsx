import React, { useEffect, useState } from "react";
import PokeDetails from "./PokeDetails";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokeType, setPokeType] = useState([]);

  const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      id
      url
      name
      image
    }
  }
}`;

  const pokeTypeQuery = `query types {
  types {
    count
    next
    previous
    results {
      id
      url
      name
    }
  }
}`;

  const gqlVariables = {
    limit: 10,
    offset: 0,
  };

  const getPokemon = async () => {
    try {
      fetch("https://graphql-pokeapi.graphcdn.app/", {
        credentials: "omit",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: gqlQuery,
          variables: gqlVariables,
        }),
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => setPokemon(data?.data?.pokemons.results));
    } catch (error) {
      console.log(error);
    }
  };

  // pokemon types
  const getPokeType = async () => {
    try {
      fetch("https://graphql-pokeapi.graphcdn.app/", {
        credentials: "omit",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: pokeTypeQuery,
        }),
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => setPokeType(data.data.types.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokeType();
    getPokemon();
  }, []);

  return (
    <div className="container mx-auto flex flex-wrap gap-20 rounded-sm py-24 justify-center justify-items-center">
      {pokemon.map((pokemon, index) => (
        <>
          <PokeDetails key={index} pokemon={pokemon} pokeType={pokeType[pokemon.id]} />
        </>
      ))}
    </div>
  );
};

export default Pokemon;

async function getStaticProps() {}
