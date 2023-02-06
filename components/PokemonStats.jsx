import React from "react";

const PokemonStats = ({ pokemonDetails, styles }) => {
  if (!pokemonDetails) return null;
  const { stats, types } = pokemonDetails;
  const statsName = ["HP", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"];

  return (
    <div className="flex flex-col w-full ">
      <p className="pt-5">Types</p>
      <div className="flex flex-row gap-3 py-4">
        {types?.map((type) => (
          <>
            <span
              className=" text-white text-[16px] font-medium mr-1  px-3.5 py-2 rounded dark:bg-green-900 "
              style={{ backgroundColor: styles[type?.type?.name] }}
            >
              {type.type.name}
            </span>
          </>
        ))}
      </div>
      <p className="py-3"> Weakness</p>
      <div className="flex flex-nowrap gap-3 py-3 sm:w-80% lg:w-96">
        {/* {stats?.map((stats) => ( */}
        <>
          <span
            className=" text-white text-[16px] font-medium mr-1 flex flex-row gap-6  px-3.5 py-2 rounded dark:bg-green-900 "
            style={{ backgroundColor: styles["fire"] }}
          >
            Fire
          </span>
          <span
            className=" text-white text-[16px] font-medium mr-1 flex flex-row gap-6  px-3.5 py-2 rounded dark:bg-green-900 "
            style={{ backgroundColor: styles["psychic"] }}
          >
            Psychic
          </span>
          <span
            className=" text-white text-[16px] font-medium mr-1 flex flex-row gap-6  px-3.5 py-2 rounded dark:bg-green-900 "
            style={{ backgroundColor: styles["flying"] }}
          >
            Flying
          </span>
          <span
            className=" text-white text-[16px] font-medium mr-1 flex flex-row gap-6  px-3.5 py-2 rounded dark:bg-green-900 "
            style={{ backgroundColor: styles["ice"] }}
          >
            Ice
          </span>
        </>
        {/* ))} */}
      </div>
      <p className="py-5"> Stats</p>
      <div className="flex flex-row gap-3 py-3 ">
        <div className="flex flex-col w-full">
          {stats?.map((stat, i) => (
            <>
              <span className="mb-1 text-base font-medium dark:text-dark">{statsName[i]}</span>
              <div className="mb-1 w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-200">
                <div
                  className="bg-blue-600 h-1.5 rounded-full dark:bg-[#257BC4]"
                  style={{ width: `${stat.base_stat}%` }}
                ></div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
