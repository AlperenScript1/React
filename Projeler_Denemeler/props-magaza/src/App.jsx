import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UrunKarti from './UrunKarti'
import Veri from './Veri'

function App() {

  return (
    <>
        <UrunKarti adi="Arduino" fiyat={800} stok={60}></UrunKarti>
        <UrunKarti adi="PC" fiyat={10000} stok={18}></UrunKarti>
        <hr/>
        <Veri user={["a","b","c"]}></Veri>
   </>
  )
}

export default App