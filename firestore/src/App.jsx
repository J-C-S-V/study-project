import { db } from './lib/firebaseConfig'
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from 'react'
import { auth } from './lib/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './App.css'

function App() {
  const [ name, setName ] = useState('');

  useEffect(() => {
    async function fetchFirebaseData() {
      const docRef = doc(db, 'firebaseCollection', 'firebaseDocument')
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        setName(docSnap.data().name);
      } else {
        console.log("No such document!");
      }
    }

    fetchFirebaseData();
  }, [])

  const signUp = () => {
    createUserWithEmailAndPassword(auth, 'email@test.com', 'password')
    .then((response) => {
      console.log('response', response)
    })
    .catch((error) => {
      console.error('Error signing up', error)
    })

  }

  
  const signIn = () => {
    signInWithEmailAndPassword(auth, 'email@test.com', 'password')
    .then((response) => {
      console.log('Sign in response', response)
    })
    .catch((error) => {
      console.error('Error signing in', error)
    })
  }

  
  const logOut = () => {
    
  }

  return (
    <>
      <h1>Hello {name}</h1>
      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>
    </>
  )
}

export default App
