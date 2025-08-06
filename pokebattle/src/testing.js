import {getMatchup, getPokeArray, getPokemonImage, getPokemonName, getRandomPokemon, simulateBattle} from "./utils.js"

let myPokeArray = await getPokeArray(151)
//let randomPokemon = getRandomPokemon(await myPokeArray)
let myMatchup = [await getRandomPokemon(myPokeArray),await getRandomPokemon(myPokeArray),await getRandomPokemon(myPokeArray)]
let myWinnerIndex = simulateBattle(await myMatchup)
console.log(await myMatchup)
console.log(await myWinnerIndex)

//console.log(await myPokeArray[0]['name'],await myPokeArray[(await myPokeArray.length-1)]['name'])