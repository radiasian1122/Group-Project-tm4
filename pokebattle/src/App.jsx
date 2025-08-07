import { PokeBattle } from "./component/PokeBattle.jsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home.jsx";

function App() {
  return (
    <>
      <header>
        <h1>Pokebattle</h1>
      </header>
      <div id="appArea">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<PokeBattle />} />
          </Routes>
        </Router>
      </div>
    </>
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

//     </div>
//   )
// }

// export default App

export default App;
