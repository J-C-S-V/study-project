// import { useState } from 'react';
// import "./App.css";

// function App() {
//   return (
//     <Board />
//   );
// }

// const Square = ({ value, onBoxClick }) => {
//   const styles = {
//     border: '2px solid black',
//     borderRadius: '10px',
//     backgroundColor: 'yellow',
//     margin: '4px',
//     width: '50px',
//     height: '50px',
//     textAlign: 'center',
//     lineHeight: '50px',
//     cursor: 'pointer'
//   }

//   // Logic here



//   return (
//     <div onClick={onBoxClick} style={styles} className="square">
//       {value}
//     </div>
//   )
// }

// const Board = () => {
//   const styles = {
//     display: 'flex',
//     flexDirection: "column",
//     alignItems: 'center'
//   }

//   const box = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     width: '186px'
//   }

//   // Logic here

//   function detectWinner(winner) {
//     if(elements[0] && elements[0] === elements[1] && elements[1] === elements[2]){
//       console.log('Winner!', winner)
//     }
//   }
//   const arr = [null, null, null, null, null, null, null, null, null]
//   const [elements, setElements] = useState(arr);
//   const [turn, setTurn] = useState(true)

//   const handleBoxClick = (index) => {
//     if(elements[index]) return;
//     const newArray = [...elements];
//     turn ? newArray[index] = 'X' : newArray[index] = 'O';
//     setTurn(!turn)
//     setElements(newArray)
//     detectWinner(turn);
//   }
//   const handleReset = () => {
//     setElements(arr)
//   }
  

//   return (
//     <div style={styles} className="Board">
//       <div style={box} className="board__box">
//         {
//           elements.map((element, index) => {
//             return (
//               <Square onBoxClick={() => handleBoxClick(index)} key={index} value={element} />
//             )
//           })
//         }
//       </div>
//     <button onClick={handleReset}>Reset</button>


//     </div>
//   )
// }

// export default App;


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function App() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
      </div>
    </Box>
  );
}