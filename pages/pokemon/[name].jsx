import Image from "next/image";
import React from "react";
import logo from "@/images/pokemon-logo.png";

import Layout from "../../components/Layout";

const PokemonDetails = () => {
  return (
    <Layout title="Pokemon Details">
      <div className="flex flex-col items-center pt-10">
        <Image src={logo} alt="Pokemon Logo" className="w-80 " />
      </div>
    </Layout>
  );
};

export default PokemonDetails;
