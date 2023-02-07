import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/pokemon-logo.png";

import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import SinglePokeDetails from "../../components/SinglePokeDetails";

const PokemonDetails = () => {
  const router = useRouter();
  const { name } = router.query;
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const pokemonQuery = `query pokemon($name: String!) {
  pokemon(name: $name) {
   id
    name
    height
    weight
    abilities {
      ability {
        name
      }
    }

   stats {
     base_stat
     effort
   }
    sprites {
      front_default
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
  }
}`;

  const getPokemonDetails = async (name) => {
    try {
      fetch("https://graphql-pokeapi.graphcdn.app/", {
        credentials: "omit",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: pokemonQuery,
          variables: pokemonDetails.name ? { name: pokemonDetails?.name } : { name },
        }),
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => setPokemonDetails(data?.data?.pokemon))
        .then(() => setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoading) {
      getPokemonDetails(name);
    }
  }, [isLoading]);

  return (
    <Layout title="Pokemon Details">
      <div className="flex flex-col items-center pt-5">
        <Image src={logo} alt="Pokemon Logo" className="w-80 " />
      </div>
      <div>
        <SinglePokeDetails pokemonDetails={pokemonDetails} />
      </div>
    </Layout>
  );
};

export default PokemonDetails;


