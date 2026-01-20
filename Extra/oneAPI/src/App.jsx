import { useEffect, useEffectEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const [data, setData] = useState()

  //https://rickandmortyapi.com/api/character

  // axios.get("https://rickandmortyapi.com/api/character") 
  //   .then(response =>{console.log(response.data)})
  //    .catch(error => {
  //   console.error("Error");  
  //   console.error(error);  
  // });

  const api = async() =>{
    try{
      const response = await axios.get("https://rickandmortyapi.com/api/character")
      setData(response.data.results[0])
      console.log(data)
    } //veri çekme olayı.
    catch{
      console.log("Err..")
    }
  }

  useEffect(() => {
    api()
  },[])

  return (
    <>

    <div> 
      <div><p>Deger: {data.status} </p> </div>
      <div><p>Deger: </p>  </div>
    </div>

    </>
  )
}

export default App