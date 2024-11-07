let second = 0;
let tens = 0;
let interval; // saat degiskeni

let getSecosnds = document.querySelector(".second");
let getTens = document.querySelector(".tens");

let btnStart = document.querySelector(".btnStart");
let btnStop = document.querySelector(".btnStop");
let btnReset = document.querySelector(".btnReset"); // Kullanacagimiz 5 adet tanimi HTML sayfasindan yakaladik ve JS sayfamiza bastirdik.

btnStart.addEventListener("click", () => {
  // console.log(btnStart); //btnStart butonunu yakaldigimizi kontrol ediyoruz.

  tens++;

  if (tens <= 9) {
    getTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    getTens.innerHTML = tens;
  }

  if (tens > 99) {
    second++;
    getSecosnds.innerHTML = "0" + second;
    tens = 0;
    getTens.innerHTML = "0" + tens;
  }

  if (second > 9) {
    getSecosnds.innerHTML = second;
  }
});
