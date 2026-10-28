async function getPokemon(pokename: string) {
  "use cache";
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
  return response.json();
}

export const instant = false

export default async function Home() {
  const pokemon = await getPokemon("pikachu");
return (
    <div className="flex flex-1 items-center justify-center">
      <main className="flex justify-center">
          <div className="flex flex-col items-center justify-center text-xl">
            <div className="flex items-center justify-center gap-10">
              <img src={pokemon.sprites.front_default} className="w-100 h-100 [image-rendering:pixelated]"></img>
              <img src={pokemon.sprites.front_shiny} className="w-100 h-100 [image-rendering:pixelated]"></img>
            </div>
            <h1 className="capitalize">{pokemon.name}#{pokemon.order}</h1>
          </div>
      </main>
    </div>
  );
}
