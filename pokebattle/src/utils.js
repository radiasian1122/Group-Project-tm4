import { useEffect } from "react";

//GENERAL USE UTILS
export async function apiCaller(url) {
  //Takes a url, and returns a promise>response JSON body
  const res = await fetch(url);
  const data = await res.json();
  return await data;
}

export function saveObjToStorage(savedObj, key) {
    localStorage.setItem(key, JSON.stringify(savedObj))
}

export function loadObjFromStorage(key) {
    if (localStorage.getItem(key) == null) {
        return false
    } else
        return JSON.parse(localStorage.getItem(key))
}

export function stateMonitor(stateValue, stateName = "State") {
  return useEffect(() => {
    console.log(`${stateName} changed, new value is`, stateValue);
  }, [stateValue]);
}

export function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

//POKEMON-SPECIFIC UTILS

export async function getPokeArray(maxId, minId = 0) {
  //Takes a maximum and optional minimum Id to pull from, and returns promise>Array of pokemon objects
  if (minId > 0) {
    minId -= 1;
    maxId -= minId;
  }

  let rawArray = await apiCaller(
    `https://pokeapi.co/api/v2/pokemon?offset=${minId}&limit=${maxId}/`
  );
  let pokeUrlArray = await rawArray.results;
  let pokeArray = await Promise.all(
    pokeUrlArray.map(async (item, key) => {
      return apiCaller(item["url"]);
    })
  );
  return await pokeArray;
}

export function simulateBattle(matchupArray) {
  let scoreArray = [];

  for (let fighterIndex in matchupArray) {
    let fighterScore = sumPokeStats(matchupArray[fighterIndex]);
    scoreArray[fighterIndex] = fighterScore;
  }


  let maxScore = Math.max(...scoreArray)

  //check for ties
  let count = 0;
  for (let i = 0; i < scoreArray.length; i++) {
    if (scoreArray[i] === maxScore) {
      count++;
    }
  }
//if tie, return -2 as a non-error resolution
  if (count > 1) {
    return -2
  }


  let winningIndex = scoreArray.indexOf(Math.max(...scoreArray));
  //returns index of winning pokemon
  return winningIndex;
}

export function getRandomPokemon(pokemonArray) {
  return pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
}

export function getPokemonName(pokemon) {
  return pokemon?.name || "No Name Found";
}

export function getPokemonImage(pokemon) {
  return pokemon?.sprites.front_default || `./assets/react.svg`;
}

export function getMatchup(pokemonArray, size = 2) {
  let matchupArray = [];
  for (let x = 0; x < size; x++) {
    matchupArray[x] = getRandomPokemon(pokemonArray);
  }
  /*
    while (poke1.id === poke2.id) {
        poke2 = getRandomPokemon(pokemonArray)
    }
        */
  return matchupArray;
}



export function getPokemonStats(pokemon) {
  return pokemon["stats"];
}

export function sumPokeStats(pokemon) {
  let pokeStatsArray = getPokemonStats(pokemon).map(
    (item) => item["base_stat"]
  );
  let fighterScore = pokeStatsArray.reduce(
    (item, accumulator) => item + accumulator
  );
  return fighterScore;
}



export function getPokemonStatValue(pokemon, stat) {
  return getPokemonStats(pokemon).find((item) => item["stat"]["name"] === stat)[
    "base_stat"
  ];
}

export function pokeStatTypes() {
  return [
    "hp",
    "attack",
    "defense",
    "special-attack",
    "special-defense",
    "speed",
  ];
}

export function rankStats(statsArray) {
  let indexedArray = statsArray.map((item, index) => ({
    value: item["value"],
    name: item["name"],
  }));

  indexedArray.sort((a, b) => b.value - a.value);
  const nameOrder = indexedArray.map((item) => item.name);

  //return {speed:value:ranking}

  //return array of rankings
  //[6,4,3,2,5,1]
  return nameOrder;
}

