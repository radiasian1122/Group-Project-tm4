import { useState } from "react";
import { loadObjFromStorage, saveObjToStorage, sortHighScores } from "../utils";

export default function Leaderboard({ leaderboardArray, highScore }) {
  const [playerName, setPlayerName] = useState("");
  const leaderBoardEntries = loadObjFromStorage("pokeLeaderboard");

  let leaderboard;

  //let playerName = prompt("New High Score! \nPlease enter your name", "");
  //if (!playerName){playerName='Anonymous Trainer'}

  if (!loadObjFromStorage("pokeLeaderboard")) {
    leaderboard = [{ name: "Anonymous Trainer", value: highScore }];
  } else {
    leaderboard = loadObjFromStorage("pokeLeaderboard");
    leaderboard.push({ name: "Anonymous Trainer", value: highScore });

    //slot player score in leaderboard according to value
    //cull down to 5 scores
  }
  leaderboard = sortHighScores(leaderboard);
  let scoresToKeep = 5;
  let numberOfElementsToRemove = leaderboard.length - scoresToKeep;
  leaderboard.splice(scoresToKeep, numberOfElementsToRemove);
  saveObjToStorage(leaderboard, "pokeLeaderboard");

  console.log(leaderBoardEntries, "leader");
  let leaderEntries;
  if (!leaderBoardEntries) {
    return <div>No Entries Yet! Play a game to make your mark!</div>;
  } else {
    leaderEntries = leaderBoardEntries.map((item, key) => {
      return (
        <li key={key} className="leaderRow">
          {item.name} {item.value}{" "}
        </li>
      );
    });
  }

  //TODO, OPT-IN Button
  return (
    <ul>
      {" "}
      <img src="src/images/leaderboard.png" alt="leaderboard"></img>
      {leaderEntries}
    </ul>
  );
}

/*


    const favDialog = document.getElementById("nameDialog");
    const outputBox = document.querySelector("output");
    const selectEl = nameDialog.querySelector("input");
    const confirmBtn = nameDialog.querySelector("#normal-close");

    let playerName

    nameDialog.addEventListener("close", (e) => {
        playerName =
            nameDialog.returnValue === ""
                ? "Anonymous Trainer"
                : `${nameDialog.returnValue}`; // Have to check for "default" rather than empty string
    });

    confirmBtn.addEventListener("click", (event) => {
        event.preventDefault(); // We don't want to submit this fake form
        nameDialog.close(selectEl.value); // Have to send the select box value here.
    });

    nameDialog.showModal();

        <dialog id="nameDialog">
          <form method="dialog">
            <p>
              <label>
                Your Name:
                <input type="text" required />
              </label>
            </p>
            <div>
              <input type="submit" id="normal-close" value="Normal close" />
            </div>
          </form>
        </dialog>
        */
