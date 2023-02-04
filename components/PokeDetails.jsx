import React from "react";

const PokeDetails = ({ pokemon, pokeType }) => {
  return (
    <div className="bg-white rounded-br-[70px] rounded hover:bg-blue-500 p-2 transform transition duration-300 ">
      <div className="bg-gray-100 rounded-lg">
        <img
          className="h-[215px] w-[215px] object-cover transform transition duration-300 hover:scale-110 p-3"
          src={pokemon.image}
          alt="pokemon"
        />
      </div>
      <div className="flex flex-col px-2 py-3">
        <p className="text-xl">{pokemon.name}</p>

        <div className="flex flex-wrap gap-2">
          <div className=" bg-green-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            <p className="text-gray-100 ">{pokeType.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeDetails;
