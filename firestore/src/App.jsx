import { db } from './lib/firebaseConfig'
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ name, setName ] = useState('');

  useEffect(() => {
    async function fetchFirebaseData() {
      const docRef = doc(db, 'firebaseCollection', 'firebaseDocument')
      const docSnap = await getDoc(docRef)
      setName(docSnap.data().name)
    }

    fetchFirebaseData();
  }, [])

  return (
    <>
      <h1>Hello {name}</h1>
    </>
  )
}

export default App
