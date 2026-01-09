import React from 'react'

function UrunKarti(props) {
  return (
    <div>
      <div>Ürün Adı: {props.adi}</div>
      <div>Ürün Fiyatı: {props.fiyat}</div>
      <div>Ürün Stok durumu: {props.stok}</div>
    </div>
  )
}

export default UrunKarti