import React from 'react'
import './data'
import { dataBase } from './data'

function Kart(props) {   
    return(
    <div style={{backgroundColor:'red'}}>
      <h2>{props.isim}</h2>
      <p>{props.aciklama}</p>
      <h5>{props.id}</h5>
    </div>)
}

export default Kart 