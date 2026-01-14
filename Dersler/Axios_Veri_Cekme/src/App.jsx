import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios' // import etmemiz gerekiyor kullanabilmek için.
import { useEffectEvent } from 'react'


const url = "http://localhost:3001"  //Tekrar tekrar tanımlamamak için.

function App() {
  const [count, setCount] = useState(0)
  
  //async, wait
  const getAllUsers = async() =>{ 
   const response =  await axios.get(url + "/users"); // 'await' bekliyor istak tamamlandığı zaman çalışacak. 
   //'await' tamamlandıktan sonra buradaki kodlar çalışmaya başlar.
  //  console.log(response.data)
  }
  
  useEffect(() => {
    console.log("Users data:");
    getAllUsers();
  }, [])
 
  const getUserId = async(usersId) =>{ // Function 
    const response =  await axios.get(url + "/users/" + usersId); //Alınan değer.
    console.log(response);
  }
  
  useEffect(() => {
    console.log("Users ID data:");
    getUserId(1); // /user/1
  }, [])

  return (
    <>
    </>
  )
}

export default App