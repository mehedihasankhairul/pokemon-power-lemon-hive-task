import Link from "next/link";
import React, { useState } from "react";
import PokeAbility from "./PokeAbility";
import PokemonStats from "./PokemonStats";

const SinglePokeDetails = ({ pokemonDetails }) => {
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
    ice: "#51C4E7",
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-nowrap min-[320px] max-[639px]:flex-col items-center justify-around py-16">
        <div className="min-[320px] max-[639px]:order-2">
          <PokeAbility pokemonDetails={pokemonDetails} styles={styles} />
        </div>
        <div className="w-full lg:w-[475px] md:w-[300px] sm:w-[375px] p-5 min-[320px] max-[639px]:order-1">
          <img
            className="w-full object-cover rounded-lg transform hover:scale-105 transition duration-500 ease-in-out"
            src={pokemonDetails?.sprites?.front_default}
            alt=""
          />
        </div>
        <div className="min-[320px] max-[639px]:order-3">
          <PokemonStats pokemonDetails={pokemonDetails} styles={styles} />
        </div>
      </div>

      <div className="mx-auto">
        <Link href="/">
          <button class="bg-[#FFCB05] border-4 border-[#2B73B9]  text-white font-bold py-2 px-4 rounded w-fit">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePokeDetails;
