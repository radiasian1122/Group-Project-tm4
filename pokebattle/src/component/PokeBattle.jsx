import React, { useEffect, useState } from "react";
import {
  getMatchup,
  getPokeArray,
  getRandomPokemon,
  simulateBattle,
  stateMonitor,
  sumPokeStats,
} from "../utils";
import PokeCard from "./PokeCard";
import "./PokeBattle.css";

export function PokeBattle({ onPlayAgain }) {
  const [pokeArray, setPokeArray] = useState([]);
  const [matchup, setMatchup] = useState([]);
  const [winState, setWinState] = useState([null, null]);
  const [count, setCount] = useState(0);

  //what do we need?
  //User clicks a pokemon
  //Battle is simulated
  //Winner is chosen
  //PokeCard updates with something according to if they won/lost

  function pokemonSelected(index) {
    console.log(index, "player selected index");
    if (winState[0] !== null) {
      return;
    }
    let winArray = winState.slice();

    winArray.fill("LOSE");
    let winnerIndex = simulateBattle(matchup);
    winArray[winnerIndex] = `WIN`;
    //simulateBattle
    //Do stuff
    setWinState(winArray);

    setCount(winState);
    if (index == winnerIndex) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }
  useEffect(() => {
    getPokeArray(151).then((data) => setPokeArray(data));
  }, []);

  useEffect(() => {
    if (pokeArray.length > 0) {
      setMatchup(getMatchup(pokeArray));
    }
  }, [pokeArray]);

  stateMonitor(matchup, "matchup");

  console.log(matchup.map((item) => item["name"]));
  if (pokeArray.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="pokebattle-container">
        <div className="win-counter">High Score: {count}</div>
        <div className="battle-selection">
          {/* Top Pokemon */}
          <PokeCard
            pokemon={matchup[0]}
            winStatus={winState[0]}
            clickedPokemon={() => pokemonSelected(0)}
          />

          {/* VS text */}
          <div className="vs-label">
            <img src="src/images/versus.png" alt="vs"></img>
          </div>

          {/* Bottom Pokemon */}
          <PokeCard
            pokemon={matchup[1]}
            winStatus={winState[1]}
            clickedPokemon={() => pokemonSelected(1)}
          />
        </div>

        <button
          className="play-again-button"
          onClick={() => {
            setMatchup(getMatchup(pokeArray));
            setWinState([null, null]);
          }}
        >
          Play Again
        </button>
      </div>
    );
  }
}
