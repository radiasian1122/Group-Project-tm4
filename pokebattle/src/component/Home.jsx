import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1>Which Pokemon Is Stronger?</h1>
      <button className="play-button" onClick={() => navigate("/play")}>
        PLAY
      </button>
    </div>
  );
}

export default Home;
