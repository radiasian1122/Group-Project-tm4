import {getMatchup, getPokeArray, getPokemonImage, getPokemonName, getPokemonStats, getPokemonStatValue, getRandomPokemon, simulateBattle} from "./utils.js"

let myPokeArray = await getPokeArray(151)
//let randomPokemon = getRandomPokemon(await myPokeArray)
let myTestPokemon = getRandomPokemon(await myPokeArray)
let myMatchup = [await myTestPokemon, await myTestPokemon]
let myWinnerIndex = simulateBattle(await myMatchup)
console.log(await myMatchup)
console.log(await myWinnerIndex)
console.log(getPokemonStats(await myMatchup[0]))
console.log(getPokemonStatValue(await myMatchup[0],'speed'))
//console.log(await myPokeArray[0]['name'],await myPokeArray[(await myPokeArray.length-1)]['name'])