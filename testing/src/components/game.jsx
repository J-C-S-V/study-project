import { useState } from "react";

export function Square({ value, onSquareClick }) {
  return (
    <div onClick={onSquareClick} className="square">
      {value}
    </div>
  );
}

export function Board() {
  const [squares, setSquares] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [isNextPlayer, setIsNextPlayer] = useState(true);

  const handleClickValue = (index) => {
    if (squares[index] || checkWinner(squares)) {
      return;
    }
    const nextSquares = [...squares];
    if (isNextPlayer) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    setSquares(nextSquares);
    setIsNextPlayer(!isNextPlayer);
    checkWinner(nextSquares);
  };

  function checkWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="board">
      <div className="row">
        <Square onSquareClick={() => handleClickValue(0)} value={squares[0]} />
        <Square onSquareClick={() => handleClickValue(1)} value={squares[1]} />
        <Square onSquareClick={() => handleClickValue(2)} value={squares[2]} />
      </div>
      <div className="row">
        <Square onSquareClick={() => handleClickValue(3)} value={squares[3]} />
        <Square onSquareClick={() => handleClickValue(4)} value={squares[4]} />
        <Square onSquareClick={() => handleClickValue(5)} value={squares[5]} />
      </div>
      <div className="row">
        <Square onSquareClick={() => handleClickValue(6)} value={squares[6]} />
        <Square onSquareClick={() => handleClickValue(7)} value={squares[7]} />
        <Square onSquareClick={() => handleClickValue(8)} value={squares[8]} />
      </div>
    </div>
  );
}
