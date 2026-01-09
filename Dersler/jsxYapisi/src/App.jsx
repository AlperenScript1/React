import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let name = "Alperen"
  const userID = 87

  let s1 = 99
  let s2 = 1
  let control = true
  let not = 50
  let isLoggedIn  = true
  let isimler = ["Python","C++","C#","Java","JavaScript","PHP"]
  
  return (
    <>
      <h2>{control ? "Giriş yapıldı":"Giriş yapılamadı.."}</h2>
      <h1> {name} Hoşgeldiniz! <br /> ID: {userID}</h1>      
      <h1>Sonuc: {s1 + s2} </h1> 
      <hr />

      {
        not + 1 >= 50 ? <p>Gecti</p> : <p>Gecemedi</p>
      }

      <hr />
      {isLoggedIn ? <p>Hoş geldin {name}</p> : <p>Giriş yapiniz.</p>}
      <hr />

      {
        isimler.map((isim,index) => {
           return <div key={index}>{index}. {isim}</div>
        })
      }
      
      {
      /*map → dizi alır.
        map → her eleman için JSX üretir.
        map → geriye YENİ bir dizi döndürür.
        React → bu diziyi ekrana basar. */
      }

    </>
  )
}

export default App
