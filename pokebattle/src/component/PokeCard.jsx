import { PokeStatsCard } from "./PokeStatsCard";
import { getPokemonImage, getPokemonName, toTitleCase, sumPokeStats } from "../utils";

export default function PokeCard({pokemon,winStatus=null,clickedPokemon}) {

  if (!pokemon) return <div>Loading...</div>;

  let winMark;
  if (winStatus){
    winMark=(<div>
    <PokeStatsCard pokemon={pokemon} winStatus={winStatus}/>
    </div>)
  }
console.log(`winstatus`,winStatus,winMark)
  return (
    <div className="pokemon" onClick={clickedPokemon}>
      <h3>{toTitleCase(getPokemonName(pokemon))}</h3>
      <img alt={getPokemonName(pokemon)} src={getPokemonImage(pokemon)} />
      {winMark}
      

    </div>
  );
}
