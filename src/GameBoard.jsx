import "./GameBoard.css";
import { useState } from "react";

function GameBoard() {
  const [player1Hand, setPlayer1Hand] = useState("");
  const [player2Hand, setPlayer2Hand] = useState("");
  const [winner, setWinner] = useState("");
  let oponentWins = 0;
  let playerWins = 0;

  function startNewGame() {
    setPlayer1Hand("");
    setPlayer2Hand("");
  }

  function oponentChoice() {
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

  function handlePlayerChoice(choice) {
    let opponentHand = oponentChoice();
    setPlayer1Hand(choice);
    setPlayer2Hand(opponentHand);
    console.log(player1Hand, player2Hand);
    whoIsWinner(choice, opponentHand);
  }

  function whoIsWinner(player1Hand, player2Hand) {
    console.log("whoiswinner");
    player1Hand = player1Hand.trim();
    player2Hand = player2Hand.trim();
    if (player1Hand === player2Hand) {
      setWinner("remis");
    } else if (
      (player1Hand === "rock" && player2Hand === "scissors") ||
      (player1Hand === "scissors" && player2Hand === "paper") ||
      (player1Hand === "paper" && player2Hand === "rock")
    ) {
      setWinner("Player 1 wins");
    } else {
      setWinner("Player 2 wins");
    }
  }
  // ----------------------------------------------------------------------
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
      <div className="winner">Winner: {winner}</div>
      <div className="statistics">
        <div>Player wins: {playerWins}</div>
        <div>Oponent wins: {oponentWins}</div>
      </div>
      <button className="restart" onClick={startNewGame}>
        Start new game
      </button>
    </div>
  );
}

export default GameBoard;
