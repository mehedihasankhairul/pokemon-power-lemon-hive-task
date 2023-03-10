import Layout from "@/components/Layout";
import Pokemon from "@/components/Pokemon";
import PikachuArrive from "@/components/PikachuArrive";
import logo from "@/assets/images/pokemon-logo.png";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout title={"Home || Pokemon Power"}>
        {/* Pokemon Logo */}
        <div className="bg-pokemonBg">
          <div className="flex flex-col items-center pt-10">
            <Image src={logo} alt="Pokemon Logo" className="w-80 " />
          </div>
          <Pokemon />
        </div>
        <div className="">
          <PikachuArrive />
        </div>
      </Layout>
    </>
  );
}
