import { PokemonGrid, PokemonsResponse, SimplePokemons } from "@/pokemons";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemons[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => response.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error('Error fetching pokemons');
  // throw notFound();

  return pokemons;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons(360);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemon List <small>static</small></span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}