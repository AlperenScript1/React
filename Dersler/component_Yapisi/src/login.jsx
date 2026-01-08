import React from 'react' //React import ediyoruz.

const user = ["Alperen"]

function Login() { //Func oluşturuyoruz
  return ( // Return ediyor tek farkı bu yoksa normal Func aslında
    <div>Component-Login-import</div>
  )
}

//Başka yerlerde çağırıp kullanabilmek için 
export default Login //Yapıyoruz Func ismi olmalı ve Büyük harf ile başlamalı.
//? export default ---> Dosyadaki tek bir ana yapıyı gönderir (İsim verme özgürlüğü alıcıdadır).
//? export         ---> Dosyadaki belirli parçaları gönderir (Alırken { } kullanılır).
//? import * as    ---> Dosyadaki TÜM 'export' edilmiş parçaları tek bir objede toplar.

//? Ayrıca return ile element dönerken eğer birden fazla ise örnk: 
//! <div>Component-Login-import</div>
//! <div>Component-Login-import</div>
//Bu yanlıştır ana kapsyıcı olmalıdır

//? Doğrusu
// <div>
   // <div>Component-Login-import</div>
   // <div>Component-Login-import</div>
// </div>

//? Veya Fragment kullanılabilir 
// 'div' yerine '<>' '</>'