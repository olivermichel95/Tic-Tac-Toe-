const GameBoard = ({ board, onSelectSquare }) => {
  //   for (const turn of turns) {
  //     const { square, player } = turn;

  //     gameBoard[square.row][square.col] = player;
  //   }
  //   const [gameBoard, setGameBoard] = useState(initialBoard);

  //   function handleClick(rowIndex, colIndex) {
  //     setGameBoard(prevGameBoard => {
  //       const updatedBoard = [...prevGameBoard.map(innerArr => [...innerArr])];
  //       prevGameBoard[rowIndex][colIndex] = activeSymbol;
  //       return [...prevGameBoard]; // Return a new copy of the board with the updated cell
  //     });
  //     onSelectSquare();
  //   }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol !== null}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
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
