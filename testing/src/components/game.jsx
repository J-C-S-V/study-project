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

  const handleSquareClick = (index) => {
    const matrixCopy = [...matrix];
    matrixCopy[index] = "X";
    setMatrix(matrixCopy);
  };

  return (
    <div className="board">
      <div className="row">
        <Square value={matrix[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={matrix[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={matrix[2]} onSquareClick={() => handleSquareClick(2)} />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};
