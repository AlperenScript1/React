import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Urunler from './urunler'

function App() {

  const urunIsim = "Dolap"


  return (
   <>
        <Urunler isim="Tv" fiyat="3500 TL"/> 
        <br></br>
        <Urunler isim={urunIsim} fiyat="120 TL"/> 
  </>   
  )
}

export default App