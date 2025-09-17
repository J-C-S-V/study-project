import { db, auth } from "./lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    async function fetchFirebaseData() {
      const docRef = doc(db, "firebaseCollection", "firebaseDocument");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setName(docSnap.data().name);
      } else {
        console.log("No such document!");
      }
    }

    fetchFirebaseData();
  }, []);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user);
        console.log(response);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error signing up", error);
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user.email);
      })
      .catch((error) => {
        console.error("Error signing in", error);
      });
  };

  const signOut = () => {
    auth
      .signOut()
      .then((response) => {
        setUser(null);
        setEmail("");
        setPassword("");
        console.log("Sign out response", response);
      })
      .catch((error) => {
        console.error("Error logging out", error);
      });
  };

  return (
    <>
      {/* <h1>Hello {name}</h1> */}
      {!user && (
        <>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChangeEmail}
            value={email}
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChangePassword}
            value={password}
            type="password"
            name="password"
            id="password"
          />
          <button onClick={signUp}>Sign Up</button>
          <button onClick={signIn}>Sign In</button>
        </>
      )}

      {user && (
        <>
          <h1>Hello {user}!</h1>
          <button onClick={signOut}>Sign Out</button>
        </>
      )}
    </>
  );
}

export default App;
