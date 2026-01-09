import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'



function App() {

  let [userName, setUserName] = useState("")
  let [id, setId] = useState("")
  let [secCode, setSecCode] = useState("")

  const setContainer = {
  backgroundColor: "black",
  color: "white",
  padding: "10px",
  borderBottomRightRadius:10,
  borderTopRightRadius:10,
  borderBottomLeftRadius:10,
  borderTopLeftRadius:10,
  width: "100%", 
  height: 165,
};


  const texts = {
    color: "white",
  }

  return (
    <>
      <div>
        <input value={userName} onChange={(e) => setUserName(e.target.value)}></input> <br />
        <input value={id} onChange={(e) => setId(e.target.value)}></input> 
        <input value={secCode} onChange={(e) => setSecCode(e.target.value)}></input>
        <hr />
        <div style={setContainer}>
          <h2 style={{textAlign: "left"}}>{userName}</h2>
          <h3 style={{textAlign: "center"}}>{id}</h3>
          <h4 style={{textAlign: "right"}}>{secCode}</h4>
        </div>
      </div>
    </>
  )
} 

export default App