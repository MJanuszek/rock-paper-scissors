import "./GameBoard.css";
import { useState } from "react";

function GameBoard() {
  const [player1Hand, setPlayer1Hand] = useState();
  const [player2Hand, setPlayer2Hand] = useState();
  const [nextPlayer, setNextPlayes] = useState(false);

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
        <div className="icon paper"></div>
        <div className="icon scissors"></div>
      </div>
      <div className="labels">
        <div className="label">Rock</div>
        <div className="label">Paper</div>
        <div className="label">Scissors</div>
      </div>
    </div>
  );
}

export default GameBoard;
