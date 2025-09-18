import { useState } from "react";

export function Square({ index, value, handleClickMark }) {
  return (
    <>
      <div onClick={handleClickMark} className="square">
        {value}
      </div>
    </>
  );
}

export function Board() {
  const marks = {
    X: "X",
    O: "O",
    none: null,
  };

  const boardState = ["X", null, "O", null, null, null, null, null, null];

  const [value, setValue] = useState("");
  const [board, setBoard] = useState(boardState);

  // function detectWinner() {
  //   if(0 and 1 and 2) {
  //     setWinner('Winner!')
  //   }
  // }

  const handleClickMark = (e) => {
    setMark(marks.O);
    console.log(e.target);
  };

  return (
    <div className="board">
      <div className="row">
        <Square
          handleClickMark={handleClickMark}
          index={0}
          value={boardState[0]}
        />
        <Square
          handleClickMark={handleClickMark}
          index={1}
          value={boardState[1]}
        />
        <Square
          handleClickMark={handleClickMark}
          index={2}
          value={boardState[2]}
        />
      </div>
      <div className="row">
        <Square
          handleClickMark={handleClickMark}
          index={3}
          value={boardState[3]}
        />
        <Square
          handleClickMark={handleClickMark}
          index={4}
          value={boardState[4]}
        />
        <Square
          handleClickMark={handleClickMark}
          index={5}
          value={boardState[5]}
        />
      </div>
      <div className="row">
        <Square
          handleClickMark={handleClickMark}
          index={6}
          value={boardState[6]}
        />
        <Square
          handleClickMark={handleClickMark}
          index={7}
          value={boardState[7]}
        />
        <Square
          handleClickMark={handleClickMark}
          index={8}
          value={boardState[8]}
        />
      </div>
    </div>
  );
}
