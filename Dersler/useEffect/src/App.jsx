import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffectEvent } from 'react'

function App() {
  const [sayac, setSayac] = useState(0)

  //? En sade hali ile.
  //  useEffect()
  //? Sonra içine bir Arrow Func oluşturuyoruz.
  useEffect(() => {},[])
  //? Sonsuz döngüye girmesin die ',[]'koyuyoruz yoksa her aksiyon alındığında çalışır.
  useEffect(() => {},[])
  //? 'UseEffect' eğer bir önceki değer aynı ise değiştirilen yeni değer ile tekrardan render yapmaz performansdan kazanır.
  
  //! 'sayac' değişkeni değiştiği zaman func çalışıyoe yani 'useEffect'
  useEffect(() => {console.log("DEGİSTİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİ")},[sayac])

  useEffect(()=>{
    if (sayac > 0){
      setSayac(sayac - 1)
      console.log("-1")
    }
  },[])

  
  return (
    <>
      <div>Sayac: {sayac}</div> <br />
      <div><button onClick={() => {setSayac(sayac + 1)}}>+</button></div>
      <button onClick={() => { if(sayac > 0) setSayac(sayac - 1) }}> - </button>
    </>
  )
}

export default App






























