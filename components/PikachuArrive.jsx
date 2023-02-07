import React from "react";
import lemonHive from "@/assets/images/lemonHive1.png";
import Image from "next/image";

const PikachuArrive = () => {
  return (
    <div className="container text-center py-10 flex flex-col mx-auto ">
      <h1 className="bg-brush text-[#257BC4] text-[48px] font-bold w-[542px] my-2 mx-auto">
        Ash & Pikachu Arrive in Pokémon Universe
      </h1>
      {/* tailwindcss grid system */}
      <div className="w-full">
        <Image className="w-full" src={lemonHive} alt="" />
      </div>
    </div>
  );
};

export default PikachuArrive;
