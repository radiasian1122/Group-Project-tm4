import { PokeStatsCard } from "./PokeStatsCard";
import {
  getPokemonImage,
  getPokemonName,
  toTitleCase,
  sumPokeStats,
} from "../utils";
import "./PokeCard.css";

export default function PokeCard({
  pokemon,
  winStatus = null,
  clickedPokemon,
}) {
  if (!pokemon) return <div>Loading...</div>;

  let winMark;
  if (winStatus) {
    winMark = (
      <div>
        <PokeStatsCard pokemon={pokemon} winStatus={winStatus} />
      </div>
    );
  }
  console.log(`winstatus`, winStatus, winMark);
  return (
    <div className="pokemonCard" onClick={clickedPokemon}>
      <div className="pokeMainArea">
        <header className="pokeCardHeader">
          <h3>{toTitleCase(getPokemonName(pokemon))}</h3>
          {/* <h3 className="pokeCardStatSum">{sumPokeStats(pokemon)}</h3> */}
        </header>

        <img
          className="pokeCardImage"
          alt={getPokemonName(pokemon)}
          src={getPokemonImage(pokemon)}
        />
      </div>

      <div className="pokeStatsArea">{winMark}</div>
    </div>
  );
}
