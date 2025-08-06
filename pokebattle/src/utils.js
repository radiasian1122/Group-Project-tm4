export async function apiCaller(url) {
    //Takes a url, and returns a promise>response JSON body
    const res = await fetch(url);
    const data = await res.json();
    return await data
}

export async function getPokeArray(maxId,minId=0){
    //Takes a maximum and optional minimum Id to pull from, and returns promise>Array of pokemon objects
    if (minId>0){
        minId-=1
        maxId-=minId
    }

    let rawArray = await apiCaller(`https://pokeapi.co/api/v2/pokemon?offset=${minId}&limit=${maxId}/`)
    let pokeUrlArray = await rawArray.results
    let pokeArray = await Promise.all(
        pokeUrlArray.map(async(item, key)=>{
        return apiCaller(item['url'])
    })
    )
    return await pokeArray
}

export function simulateBattle(poke1, poke2){
    return poke1
}

export function getRandomPokemon(pokemonArray){
    
    return pokemonArray[Math.floor(Math.random()*pokemonArray.length)-1]
}

export function getPokemonName(pokemon){
    return pokemon?.name ||"No Name Found"
}

export function getPokemonImage(pokemon){
    return pokemon?.sprites.front_default || `./assets/react.svg`
}