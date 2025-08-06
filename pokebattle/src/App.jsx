import {PokeBattle} from "./component/PokeBattle.jsx"
import "./App.css";

function App() {
return (<div><PokeBattle/></div>)
} 

// function PokeBattle({ onPlayAgain }) {
//  return (
//     <div className="pokebattle-container">
//         <h1 className="title"> PokeBattle</h1>

//     <div className="battle-selection">
//         {/* Top Pokemon */}
//         <div className="pokemon-row">
//             <div className="result-icon" />
//             <div className="pokemon-image"> Pokemon Picture</div>
//         </div>

//         {/* VS text */}

//     <div className="vs-lable">
//         <p>Checkmark if Right</p>
//         <p>X if Wrong</p>
//         <h2>VS</h2>
//     </div>

//     {/* Bottom Pokemon */}
//     <div className="pokemon-row">
//         <div className="result-icon" />
//         <div className="pokemon-image"> Pokemon Picture</div>
//     </div>
//   </div>

//   <button className="play-again-buton" onClick={onPlayAgain}>Play Again</button>
//     </div>
//     );
//   }

export default App
