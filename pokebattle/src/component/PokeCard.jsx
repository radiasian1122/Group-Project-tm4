import { useState, useEffect } from "react";
import Game from "./Game";

export default function PokeCard({ pokeId, stats, pokeSelected, onClick }) {
  const [pokeData, setPokeData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((res) => res.json())
      .then((data) => setPokeData(data));
  }, [pokeId]);

  if (!pokeData) return <div>Loading...</div>;

  return (
    <div className="pokemon" onClick={onClick}>
      <h3>{pokeData.name.toUpperCase()}</h3>
      <img alt={pokeData.name} src={pokeData.sprites.front_default} />
    </div>
  );
}
