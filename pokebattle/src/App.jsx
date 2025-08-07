import { PokeBattle } from "./component/PokeBattle.jsx";
import "./App.css";

function App() {
  return (
    <div id="appArea">
      <header></header>
      <main>
        <PokeBattle />
      </main>
      <footer></footer>
    </div>
  );
}
// import { useState } from 'react'
// import {Routes, Route, Link} from "react-router-dom";
// import './App.css'
// import Home from './Home'
// import Game from './Game'

// function App() {
//   const [details, setDetails] = useState({})

//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/play' element={<Game />} />
//       </Routes>
//     </div>
//   )
// }

// export default App

export default App;
