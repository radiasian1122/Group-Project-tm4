import { getPokemonStatValue, pokeStatTypes, toTitleCase, sumPokeStats, rankStats } from "../utils"
import "./PokeStatsCard.css";

export function PokeStatsCard({ pokemon, winStatus }) {

    let myStatsArray = pokeStatTypes().map((item, key) => {
        return {'name':item,'value':getPokemonStatValue(pokemon, item)}

    })


    let rankIndex = rankStats(myStatsArray)

    let myStatsCard = myStatsArray.map((item,key)=>{
        return (
            <p key={key} className="statsRow" rank={rankIndex.indexOf(item['name'])}>{toTitleCase(item['name'])}: {item['value']}</p>
        )})
        return (
            <div
            className={`pokeStatsCard ${
                winStatus === "WIN" ? "WIN" : winStatus === "LOSE" ? "LOSE" : ""
            }`}
            >
            <h3>{`${winStatus} ${sumPokeStats(pokemon)}`}</h3>
            {myStatsCard}
            </div>
        );
    }
