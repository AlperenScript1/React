import React from 'react'

//? 1. Props = Bir component'e dışarıdan gönderilen "parametreler"dir.
//? 2. Amacı = Component'i dinamik yapmak. (Her seferinde farklı veriyle kullanmak).
//? 3. Kural = Sadece okunur (Read-Only). Child component kendisine gelen prop'u değiştiremez.
//? 4. Yön = Veri her zaman "Babalar"dan (Parent) "Çocuklar"a (Child) gider.

function Urunler(props) {
  console.log(props) 
  return (
    
    <div> 
        <div>Ürün Bilgileri</div>
        <div>
            <div>isim: {props.isim}</div>
            <div>Fiyatı: {props.fiyat}</div>
        </div>
    </div>
  )
}

export default Urunler