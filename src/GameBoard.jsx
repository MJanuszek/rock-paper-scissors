import "./GameBoard.css";
import { useState } from "react";

function GameBoard() {
  const [player1Hand, setPlayer1Hand] = useState("");
  const [player2Hand, setPlayer2Hand] = useState("");
  // const [nextPlayer, setNextPlayes] = useState(false);
  let oponentWins = 0;
  let playerWins = 0;

  function startNewGame() {
    setPlayer1Hand("");
    setPlayer2Hand("");
  }

  function oponentChoice() {}

  function handlePlayerChoice(choice) {
    console.log(choice);
  }
  return (
    <div className="container">
      <div className="icons">
        <div
          className="icon rock"
          onClick={() => handlePlayerChoice("rock")}
        ></div>
        <div
          className="icon paper"
          onClick={() => handlePlayerChoice("paper")}
        ></div>
        <div
          className="icon scissors"
          onClick={() => handlePlayerChoice("scissors")}
        ></div>
      </div>
      <div className="labels">
        <div className="label">Rock</div>
        <div className="label">Paper</div>
        <div className="label">Scissors</div>
      </div>
      <div className="turn">
        <h2>Player hand: {player1Hand} </h2>
        <h2>Oponent hand: {player2Hand} </h2>
      </div>
      <div className="statistics">
        <div>Player wins: {playerWins}</div>
        <div>Oponent wins: {oponentWins}</div>
      </div>
      <button className="restart">Start new game</button>
    </div>
  );
}

export default GameBoard;
