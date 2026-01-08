import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // String name = "Alperen";
  const [name, setName] = useState("//Alperen");
  // 'name' değişkene ulaşacağımız isim 'setName' ise değişkene 'name' içerisindeki veriyi yeni bir veri ile değiştirmek için. 
  // 'useState' başlangıç değerini belirtiyoruz.
  const [lastName,setLastName] = useState("Şen");
  // veri tipi [değerini tutacak değişken, değiştirebilcekFunc] = ilk Atılacak değer ("text")
  //Birden fazlada veri tanımlayabiliriz.
  const [language, setLanguage] = useState(["Alperen", "Python", "C#", "C++","JavaScript"])
  //Bir değişkenin içerisindeki verilerede 'data.' ulaşılabilir.
  const [data, setData] = useState({userName: "Alperen", lastName: "Şen", id:"87"})
  // True & False
  const [bayrak, setBayrak] = useState(true);

  //'useState'bir değişken değiştiğinde tekrardan render edilir. 
  const [sayac, setSayac] = useState(0)
  
  console.log(language) //Okumak için 
  console.log(setLanguage) //Değiştirmek için 
  
  const nameChn = () =>{
    setName("Delete name"); 
    setLastName("Delete lastName")
  }


  const arttir =  () => {
    setSayac(sayac + 1)
  }

  return (
    <>
     
    </>
  )
}

export default App
