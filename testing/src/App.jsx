import { useState } from 'react';
import "./App.css";

function App() {
  return (
    <Board />
  );
}

const Square = ({ value, onBoxClick }) => {
  const styles = {
    border: '2px solid black',
    borderRadius: '10px',
    backgroundColor: 'yellow',
    margin: '4px',
    width: '50px',
    height: '50px',
    textAlign: 'center',
    lineHeight: '50px',
    cursor: 'pointer'
  }

  // Logic here



  return (
    <div onClick={onBoxClick} style={styles} className="square">
      {value}
    </div>
  )
}

const Board = () => {
  const styles = {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center'
  }

  const box = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '186px'
  }

  // Logic here

  function detectWinner(winner) {
    if(elements[0] && elements[0] === elements[1] && elements[1] === elements[2]){
      console.log('Winner!', winner)
    }
  }
  const arr = [null, null, null, null, null, null, null, null, null]
  const [elements, setElements] = useState(arr);
  const [turn, setTurn] = useState(true)

  const handleBoxClick = (index) => {
    if(elements[index]) return;
    const newArray = [...elements];
    turn ? newArray[index] = 'X' : newArray[index] = 'O';
    setTurn(!turn)
    setElements(newArray)
    detectWinner(turn);
  }
  const handleReset = () => {
    setElements(arr)
  }
  

  return (
    <div style={styles} className="Board">
      <div style={box} className="board__box">
        {
          elements.map((element, index) => {
            return (
              <Square onBoxClick={() => handleBoxClick(index)} key={index} value={element} />
            )
          })
        }
      </div>
    <button onClick={handleReset}>Reset</button>


    </div>
  )
}

export default App;
