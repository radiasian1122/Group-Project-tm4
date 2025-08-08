import React, { useEffect, useState } from "react";
import {
  getMatchup,
  getPokeArray,
  getRandomPokemon,
  simulateBattle,
  stateMonitor,
  sumPokeStats,
  getPokemonImage,
  getPokemonName,
  loadObjFromStorage,
  saveObjToStorage,
  sortHighScores,
} from "../utils";
import PokeCard from "./PokeCard";
import "./PokeBattle.css";
import Leaderboard from "./Leaderboard";

export function PokeBattle({ onPlayAgain }) {
  const [pokeArray, setPokeArray] = useState([]);
  const [matchup, setMatchup] = useState([]);
  const [winState, setWinState] = useState([null, null]);
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);

  //what do we need?
  //User clicks a pokemon
  //Battle is simulated
  //Winner is chosen
  //PokeCard updates with something according to if they won/lost

  //This function runs when a player clicks a pokeCard
  function pokemonSelected(index) {
    console.log(index, "player selected index");

    //If winstate exists (player already clicked once), then do nothing
    if (winState[0] !== null) {
      return;
    }
    let winArray = winState.slice();

    //Get the index of our winner from simulateBattle
    let winnerIndex = simulateBattle(matchup);

    //simulateBattle gives back -2 if there is a draw or non-error outcome
    if (winnerIndex == -2) {
      winArray.fill("DRAW");
      setWinState(winArray);
      setCount(count + 1);
      return;
    } else {
      winArray.fill("LOSE");
      winArray[winnerIndex] = `WIN`;
      //simulateBattle
      //Do stuff
      setWinState(winArray);

      setCount(winState);
      if (index == winnerIndex) {
        setCount(count + 1);
      } else {
        setHighScore(count); //stash count to high score

        setCount(-1); //trigger lose screen
      }
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
  } else if (count == -1) {
    let loserPokemon = getRandomPokemon(pokeArray);
    return (
      <div className="pokebattle-container">
        <div>
          <img
            className="gameover"
            src="src/images/game-over.png"
            alt="loser"
          ></img>
        </div>
        <div>
          {" "}
          <div className="highscore-container">
            <img
              src="src/images/highscore.png"
              className="high-score"
              alt="highscore"
            ></img>
            <span className="score-span">{highScore}</span>
          </div>
        </div>
        <img
          className="pokeCardImage"
          alt={getPokemonName(loserPokemon)}
          src={getPokemonImage(loserPokemon)}
        />
        <div className="buttonContainer">
          <button
            className="play-again-button"
            onClick={() => {
              setMatchup(getMatchup(pokeArray));
              setWinState([null, null]);
              setCount(0);
            }}
          >
            Play Again
          </button>
        </div>
        <Leaderboard highScore={highScore} />
      </div>
    );
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
          New Matchup
        </button>
      </div>
    );
  }
}
