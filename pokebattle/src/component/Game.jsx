import { useState, useEffect } from "react";
import PokeCard from "./PokeCard";

function Game() {
  const [ids, setIds] = useState(getTwoRandomIds());
  const [pokemonSelection, setPokemonSelection] = useState(null);
  const [poke1Stats, setPoke1Stats] = useState([null]);
  const [poke2Stats, setPoke2Stats] = useState([null]);

  useEffect(() => {
    Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${ids[0]}`).then((res) =>
        res.json()
      ),
      fetch(`https://pokeapi.co/api/v2/pokemon/${ids[1]}`).then((res) =>
        res.json()
      ),
    ]).then(([data1, data2]) => {
      setPoke1Stats(data1);
      setPoke2Stats(data2);
      setPokemonSelection(null);
    });
  }, [ids]);

  function getTwoRandomIds(max = 1000) {
    const id1 = Math.floor(Math.random() * max) + 1;
    let id2 = Math.floor(Math.random() * max) + 1;

    while (id2 === id1) {
      id2 = Math.floor(Math.random() * max) + 1;
    }

    return [id1, id2];
  }

  function handleGuess(index) {
    setPokemonSelection(index);
  }

  return (
    <div>
      <h2>Which Pokemon has higher base stats?</h2>
      <PokeCard
        pokeId={ids[0]}
        stats={poke1Stats}
        pokeSelected={pokemonSelection === 0}
        onClick={() => handleGuess(0)}
      />
      <p>VS</p>
      <PokeCard
        pokeId={ids[1]}
        stats={poke2Stats}
        pokeSelected={pokemonSelection === 1}
        onClick={() => handleGuess(1)}
      />
      <br />
      <button onClick={() => setIds(getTwoRandomIds())}>New Matchup</button>
    </div>
  );
}

export default Game;
