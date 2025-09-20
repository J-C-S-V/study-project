import { useState } from "react";

const Square = ({ onSquareClick, value }) => {
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
};

export const Board = () => {
  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  const handleSquareClick = (index) => {
    if (matrix[index]) return;
    const matrixCopy = [...matrix];
    matrixCopy[index] = isNext ? "X" : "O";
    setMatrix(matrixCopy);
    setIsNext(!isNext);
    checkWinner();
  };

  function checkWinner() {
    const winnerTable = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    if (
      matrix[winnerTable[0][0]] === matrix[winnerTable[0][1]] &&
      matrix[winnerTable[0][1]] === matrix[winnerTable[0][2]] &&
      matrix[winnerTable[0][0]] !== null
    ) {
      console.log("Winner!");
    }
    console.log("executing");
  }

  return (
    <div className="board">
      <div className="row">
        <Square value={matrix[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={matrix[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={matrix[2]} onSquareClick={() => handleSquareClick(2)} />
      </div>
      <div className="row">
        <Square value={matrix[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={matrix[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={matrix[5]} onSquareClick={() => handleSquareClick(5)} />
      </div>
      <div className="row">
        <Square value={matrix[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={matrix[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={matrix[8]} onSquareClick={() => handleSquareClick(8)} />
      </div>
    </div>
  );
};
