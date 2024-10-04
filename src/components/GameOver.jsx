import React from "react";

const GameOver = ({ winner, restartMatch }) => {
  return (
    <div id="game-over">
      <h2> Game Over!</h2>
      {winner && <p> {winner} Won!</p>}
      {!winner && <p>It's a draw!</p>}
      <button onClick={restartMatch}>Rematch!</button>
    </div>
  );
};

export default GameOver;
