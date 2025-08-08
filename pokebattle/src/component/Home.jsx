import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to PokeBattle</h1>
        <h3 className="explanation">You will be given two Pokemon to choose from.<br/> It is up to you to 
          pick the Pokemon that you think has the highest total of all stats!
        </h3>
      </header>
      <main>
        <button className="play-button" onClick={() => navigate("/play")}>
          PLAY
        </button>
      </main>
      <footer></footer>
    </div>
  );
}

export default Home;
