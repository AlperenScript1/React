import React from 'react'

function Veri(props) {
  return (
    <div>
        {props.user.map((degerler, index) =>{
          return <div key={index}>{index} {degerler}</div>
        })}
    </div>
  )
}

export default Veri