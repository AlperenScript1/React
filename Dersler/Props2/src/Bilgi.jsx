import React from 'react'

function Bilgi(props) { {/* App'den urun,fiyat,aciklamayı props çekiyor obje gibi. */}
    console.log(props)
    return (
    <div>
      <div> 
        <div>Ürün: {props.urun}</div> {/* props içinden seçiyoruz.*/}
        <div>Fiyat: {props.fiyat} TL</div>
        <div>Açıklama: {props.aciklama}</div>
      </div>
    </div>
  )
}

export default Bilgi 