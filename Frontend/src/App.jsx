import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState('')
  
  useEffect(()=>{
    
    const fetchBackendHello = async() =>{
      try{
        const data  = axios.get("http://localhost:3000/users")
        setCount(data.data);
      } catch (err){
        console.log(err);
      }
    }
    fetchBackendHello();
  }, [])

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
