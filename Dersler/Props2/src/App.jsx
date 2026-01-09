import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bilgi from './Bilgi'

function App() {
  
  return (
    <>
      {/* isimleri belirleyip değerleri giriyoruz*/}
      <Bilgi urun="Tv" fiyat={1500} aciklama="OLED Ekran TV"></Bilgi> 
    </>
  )
}

export default App