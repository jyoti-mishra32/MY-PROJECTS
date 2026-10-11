import { useState } from "react";

function App() {
  // Store the current player
  const [state, setState] = useState("X");

  // Store the board values
  const [board, setBoard] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]);

  // Store the winner
  const [winner, setWinner] = useState(null);

  // Store the draw status
  const [draw, setDraw] = useState(false);

  // Winning combinations
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Check if there is a winner
  function checkWinner(board) {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a];
      }
    }

    return null;
  }

  // Handle box click
  function handleClick(index) {
    // Stop the game if there is a winner or draw
    if (board[index] !== "" || winner || draw) {
      return;
    }

    // Make a copy of the board
    const newBoard = [...board];

    // Put current player in the box
    newBoard[index] = state;

    // Update board
    setBoard(newBoard);

    // Check winner
    const result = checkWinner(newBoard);

    if (result) {
      setWinner(result);
      return;
    }

    // Check draw
    if (newBoard.every((box) => box !== "")) {
      setDraw(true);
      return;
    }

    // Change player
    if (state === "X") {
      setState("O");
    } else {
      setState("X");
    }
  }

  // Restart the game
  function restartGame() {
    setBoard([
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]);

    setState("X");
    setWinner(null);
    setDraw(false);
  }

  return (
    <div className="game">

      {/* Game title */}
      <h1>Tic-Tac-Toe</h1>

      {/* Show current player */}
      {!winner && !draw && (
        <h2>Current Player: {state}</h2>
      )}

      {/* Show winner */}
      {winner && (
        <h2>Winner: {winner} 🏆</h2>
      )}

      {/* Show draw */}
      {draw && (
        <h2>Game Draw! 🤝</h2>
      )}

      {/* Game board */}
      <div className="board">

        <button onClick={() => handleClick(0)}>
          {board[0]}
        </button>

        <button onClick={() => handleClick(1)}>
          {board[1]}
        </button>

        <button onClick={() => handleClick(2)}>
          {board[2]}
        </button>

        <button onClick={() => handleClick(3)}>
          {board[3]}
        </button>

        <button onClick={() => handleClick(4)}>
          {board[4]}
        </button>

        <button onClick={() => handleClick(5)}>
          {board[5]}
        </button>

        <button onClick={() => handleClick(6)}>
          {board[6]}
        </button>

        <button onClick={() => handleClick(7)}>
          {board[7]}
        </button>

        <button onClick={() => handleClick(8)}>
          {board[8]}
        </button>

      </div>

      {/* Restart button */}
      <button onClick={restartGame}>
        Restart Game
      </button>

    </div>
  );
}

export default App;