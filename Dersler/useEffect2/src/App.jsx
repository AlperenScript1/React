import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  let [name, setName] = useState("")

  useEffect(() => { //'useEffect' call back func ister her zaman func oluştururlarak yazılır.
    console.log("useEffect - Aktif")
  }) //'[]' Bir dizi vermez isek her aksiyon aldığında çalışır.

  useEffect(() => { //'useEffect' call back func ister her zaman func oluştururlarak yazılır.
    console.log("Component render edildiğinde  1 defa çalışır!")
  },[]) //'[]' Liste verildiği zaman sadece 1 defa çalışır.

  //Bu useEffect ise name değişkeni değeri değiştiği zaman ve ilk Component render edildiğinde çalışır.
  useEffect(()=>{
    console.log("name değişti!")
  },[name]) 

  return (
    <>
      <div>
        <h1>useEffect2</h1>
        <div>
          <button onClick={() => {setName("//A")}}>'name' değiştir.1</button>
          {/*Eğer aynı değer atanır ise 'useEffect' çalışmaz.*/}
          <button onClick={() => {setName("//A2")}}>'name' değiştir.2</button>
        </div>
      </div>
    </>
  )
}

export default App
