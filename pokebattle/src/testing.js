import {getPokeArray, getRandomPokemon} from "./utils.js"

let myPokeArray = await getPokeArray(151)
let randomPokemon = getRandomPokemon(await myPokeArray)
console.log(await randomPokemon)

//console.log(await myPokeArray[0]['name'],await myPokeArray[(await myPokeArray.length-1)]['name'])