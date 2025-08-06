export async function apiCaller(url) {
    //Takes a url, and returns a promise>response JSON body
    const res = await fetch(url);
    const data = await res.json();
    return await data
}

export async function getPokeArray(maxId,minId=0){
    //Takes a minimum and optional maximum Id to pull from, and returns promise>Array of pokemon objects
    let pokeArray = await apiCaller(`https://pokeapi.co/api/v2/pokemon?offset=%${minId}&limit=${maxId}/`)
    console.log(await pokeArray)
    return await pokeArray
}

export function simulateBattle(poke1, poke2){
    return poke1
}