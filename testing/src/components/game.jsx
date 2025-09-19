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
  const values = {
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

  const handleClickValue = (e) => {
    setValue(values.O);
    console.log(e.target);
  };

  return (
    <div className="board">
      <div className="row">
        <Square handleClickValue={handleClickValue} index={0} value={value} />
        <Square handleClickValue={handleClickValue} index={1} value={value} />
        <Square handleClickValue={handleClickValue} index={2} value={value} />
      </div>
      <div className="row">
        <Square
          handleClickValue={handleClickValue}
          index={3}
          value={boardState[3]}
        />
        <Square
          handleClickValue={handleClickValue}
          index={4}
          value={boardState[4]}
        />
        <Square
          handleClickValue={handleClickValue}
          index={5}
          value={boardState[5]}
        />
      </div>
      <div className="row">
        <Square
          handleClickValue={handleClickValue}
          index={6}
          value={boardState[6]}
        />
        <Square
          handleClickValue={handleClickValue}
          index={7}
          value={boardState[7]}
        />
        <Square
          handleClickValue={handleClickValue}
          index={8}
          value={boardState[8]}
        />
      </div>
    </div>
  );
}
