import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to PokeBattle</h1>
        <h3>An interactive game to learn Pokemon base stats</h3>
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
