import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [y1, setY1] = useState("-")
  const [y2, setY2] = useState("--")
  const [yazi, setYazi] = useState("")


  const degistir = () =>{
    setY1("tesText")
  }

  return (
    <>
    <div>
      <p>1. Yazi: {y1}</p>  
      <p>2. Yazi: {y2}</p>  
    </div>    
    <div>
      <input type='text'onChange={e => setY2(e.target.value)}></input>
      <br/>
      <button onClick={degistir}>Tıkla</button>  
    </div>
    </> 
  )
}

export default App