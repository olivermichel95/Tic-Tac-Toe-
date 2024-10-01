import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare, activeSymbol }) => {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  function handleClick(rowIndex, colIndex) {
    setGameBoard(prevGameBoard => {
      const updatedBoard = [...prevGameBoard.map(innerArr => [...innerArr])];
      prevGameBoard[rowIndex][colIndex] = activeSymbol;
      return [...prevGameBoard]; // Return a new copy of the board with the updated cell
    });
    onSelectSquare();
  }
  return (
    <ol id="game-board">
      {initialBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleClick(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
