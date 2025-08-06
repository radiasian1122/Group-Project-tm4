import { useState, useEffect } from "react";
import Game from "./Game";
import { getPokemonImage, getPokemonName, toTitleCase, sumPokeStats } from "../utils";

export default function PokeCard({pokemon,winStatus=null,clickedPokemon}) {

  if (!pokemon) return <div>Loading...</div>;

  let winMark;
  if (winStatus){
    winMark=(<div>{`${winStatus} ${sumPokeStats(pokemon)}`}</div>)
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
