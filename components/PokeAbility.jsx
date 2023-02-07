import React from "react";

const PokeAbility = ({ pokemonDetails }) => {
  const { id, name, abilities, height, weight } = pokemonDetails;

  return (
    <div className="flex flex-col items-center w-full lg:w-96 p-3 ">
      <div className="flex flex-nowrap gap-3 font-semibold lg:text-[48px] md:text-[56px] text-[#257BC4] min-[320px] max-[639px]:text-[50px]">
        <p className="first-letter:capitalize"> {name}</p>
        <p> #0{id}</p>
      </div>
      <div className="lg:w-[400] md:w-[240px]">
        <p>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
      </div>
      <div className="w-full lg:w-[365px] md:w-60 pe-5 p-5 border-2 sm:w-[400px]  border-red-400 flex flex-wrap text-center my-2">
        <div className="flex flex-wrap w-full justify-around py-3 ">
          <div className="">
            <h1 className="text-[20px] font-semibold ">Height</h1>
            <p className="py-1">{height}</p>
          </div>
          <div>
            <h1 className="text-[20px] font-semibold ">Category</h1>
            <p className="py-1">Seed</p>
          </div>
        </div>
        <div className="flex flex-wrap w-full mx-auto justify-around py-3">
          <div className="">
            <h1 className="text-[20px] font-semibold ">Weight</h1>
            <p className="py-1">{weight}</p>
          </div>
          <div className="">
            <h1 className="text-[20px] font-semibold">Abilities</h1>
            {abilities?.map((ability) => (
              <>
                <p className="font-medium py-1">{ability.ability.name}</p>
              </>
            ))}
          </div>
        </div>

        {/* test */}
      </div>
    </div>
  );
};

export default PokeAbility;
