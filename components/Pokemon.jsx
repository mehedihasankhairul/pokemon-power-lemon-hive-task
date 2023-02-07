import React, { useEffect, useState } from "react";
import PokeDetails from "./PokeCards";

import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokeType, setPokeType] = useState([]);
  const [width, setWidth] = useState();

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

  // colors
  const styles = {
    grass: "#9BCC50",
    poison: "#B97FC9",
    fire: "#FD7D24",
    flying: "#3DC7EF",
    water: "#4592C4",
    bug: "#729F3F",
    normal: "#A4ACAF",
    electric: "#EED535",
    ground: "#AB9842",
    fairy: "#FDB9E9",
    fighting: "#D56723",
    psychic: "#F366B9",
    rock: "#A38C21",
    ghost: "#7B62A3",
    steel: "#9EB7B8",
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
    getPokemon();
    getPokeType();
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const isMobile = width <= 550;
  console.log(isMobile);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto flex flex-wrap gap-20 rounded-sm py-24 justify-center justify-items-center">
      {isMobile ? (
        <Swiper spaceBetween={140} slidesPerView={2} className="mySwiper" navigation>
          {pokemon.map((pokemon, index) => (
            <>
              <SwiperSlide key={index}>
                <PokeDetails styles={styles} key={index} pokemon={pokemon} pokeType={pokeType[pokemon.id]} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      ) : (
        pokemon.map((pokemon, index) => (
          <PokeDetails styles={styles} key={index} pokemon={pokemon} pokeType={pokeType[pokemon.id]} />
        ))
      )}
    </div>
  );
};

export default Pokemon;
