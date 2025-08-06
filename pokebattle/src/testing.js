import {getPokeArray, getPokemonImage, getPokemonName, getRandomPokemon} from "./utils.js"

let myPokeArray = await getPokeArray(151)
let randomPokemon = getRandomPokemon(await myPokeArray)
let myName = getPokemonName (await randomPokemon)
let myImg = getPokemonImage(await randomPokemon)
console.log(myName,myImg)

//console.log(await myPokeArray[0]['name'],await myPokeArray[(await myPokeArray.length-1)]['name'])