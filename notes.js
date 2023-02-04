import Layout from "@/components/Layout";
import logo from "@/images/pokemon-logo.png";
import Image from "next/image";

export default function Home() {
  const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      url
      name
      image
    }
  }
}`;

  const gqlVariables = {
    limit: 10,
    offset: 1,
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
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
  };

  getPokemon();
  return (
    <>
      <Layout title={"Home || Pokemon Power"}>
        {/* Pokemon Logo */}
        <div className="flex flex-col items-center mt-20">
          <Image src={logo} alt="Pokemon Logo" className="w-80" />
        </div>
      </Layout>
    </>
  );
}
