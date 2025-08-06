import React, { useEffect, useState } from 'react';
import { getMatchup, getPokeArray, getRandomPokemon, simulateBattle, sumPokeStats } from '../utils';
import PokeCard from './PokeCard';

export function PokeBattle({ onPlayAgain }) {
    const [pokeArray, setPokeArray] = useState([])
    const [matchup, setMatchup] = useState([])
    const [winState, setWinState] = useState([null,null])


    //what do we need?
    //User clicks a pokemon
    //Battle is simulated
    //Winner is chosen
    //PokeCard updates with something according to if they won/lost

    function pokemonSelected(index){
        if (winState[0]!==null){return}
        let winArray = winState.slice()
        
        winArray.fill('LOSE')
        let winnerIndex = simulateBattle(matchup)
        winArray[winnerIndex]=`WIN`
        //simulateBattle
        //Do stuff
        setWinState(winArray)
    }

    useEffect(() => {
        getPokeArray(151).then(data => setPokeArray(data))
    }, []);

    useEffect(() => {
        if (pokeArray.length > 0) {
            setMatchup(getMatchup(pokeArray))
        }
    }, [pokeArray]);

    console.log(matchup.map(item=>item['name']))
    if (pokeArray.length === 0) {
        return (<div>Loading...</div>)
    } else {
        return (
            <div className="pokebattle-container">
                <h1 className="title"> PokeBattle</h1>

                <div className="battle-selection">
                    {/* Top Pokemon */}
                    <PokeCard pokemon={matchup[0]} winStatus={winState[0]} clickedPokemon={()=>pokemonSelected(0)} />

                    {/* VS text */}

                    <div className="vs-lable">
                        <p>Checkmark if Right</p>
                        <p>X if Wrong</p>
                        <h2>VS</h2>
                    </div>

                    {/* Bottom Pokemon */}
                    <PokeCard pokemon={matchup[1]} winStatus={winState[1]} clickedPokemon={()=>pokemonSelected(1)}/>
                </div>

                <button className="play-again-buton" onClick={()=>{setMatchup(getMatchup(pokeArray));setWinState([null,null])}}>Play Again</button>
            </div>
        );
    }



}

