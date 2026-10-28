export default async function Home() {
    "use cache";
    
    let pokename = "eevee"
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
    const pokemon = await response.json();

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-col justify-center">
          <h1 className="uppercase font-frauces">{pokemon.name}#{pokemon.order}</h1>
          <img src={pokemon.sprites.front_female} className=""></img>
      </main>
    </div>
  );
}
