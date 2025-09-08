import { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    name: "Juansan",
    age: 20,
    email: "lorem@juansan.com",
  });

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setPerson({ ...person, name: e.target.value });
    } else if (e.target.id === "age") {
      setPerson({ ...person, age: e.target.value });
    } else if (e.target.id === "email") {
      setPerson({ ...person, email: e.target.value });
    }
  };
  return (
    <>
      <h1>useState</h1>
      <label htmlFor="">Name: </label>
      <input
        id="name"
        onChange={handleChange}
        value={person.name}
        type="text"
      />
      <br />
      <label htmlFor="">Age: </label>
      <input
        id="age"
        onChange={handleChange}
        value={person.age}
        type="number"
      />
      <br />
      <label htmlFor="">Email: </label>
      <input
        id="email"
        onChange={handleChange}
        value={person.email}
        type="email"
      />
      <div>Name: {person.name}</div>
      <div>Age: {person.age}</div>
      <div>Email: {person.email}</div>
    </>
  );
}

export default App;
