import Link from "next/link";
import React from "react";

const PokeDetails = ({ pokemon, pokeType, styles }) => {
  return (
    <Link href={`/pokemon/${pokemon?.name}`}>
      <div className="card p-2 transform transition duration-300 ">
        <div className="bg-gray-100 rounded-lg w-full">
          <img
            className="h-[215px] w-[215px] object-cover transform transition duration-300 hover:scale-110 p-3"
            src={pokemon?.image}
            alt="pokemon"
          />
        </div>
        <div className="flex flex-col px-2 py-3">
          <p className="text-xl">{pokemon?.name}</p>
          <div className="flex flex-wrap gap-2">
            <span
              className="bg-green-100 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 "
              style={{ backgroundColor: styles[pokeType?.name] }}
            >
              {pokeType?.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokeDetails;
