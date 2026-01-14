import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios' // HATA: Eksikti eklendi

const baseURL = "http://localhost:3001"

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(baseURL + "/users");
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  const getUserId = async (usersId) => {
    const response = await axios.get(baseURL + "/users/" + usersId); // HATA: url -> baseURL yapıldı
    console.log(response);
  }

  useEffect(() => {
    getUserId(1);
  }, [])

  const createUser = async (newUser) => {
    const cevap = await axios.post(`${baseURL}/users`, newUser)
  }

  useEffect(() => {
    const newUser = {
      "username": "React",
      "password": "Javascript"
    }
    createUser(newUser)
  }, [])

  return (
    <>
      <h1>Axios</h1>
    </>
  )
}

export default App