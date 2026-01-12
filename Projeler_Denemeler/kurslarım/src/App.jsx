import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Kart from './Kart'
import { dataBase } from './data'

function App() {

  return (
    <>
     <Header></Header>

    {
      dataBase.map((deger, index) => {
       return (
        <Kart key={index} id={deger.id} isim={deger.isim} aciklama={deger.aciklama} ></Kart>
      )
      })
    }
    </>
  )
}

export default App