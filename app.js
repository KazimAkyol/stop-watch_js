let second = 0;
let tens = 0;
let interval; // saat degiskeni

let getSeconds = document.querySelector(".second");
let getTens = document.querySelector(".tens");

let btnStart = document.querySelector(".btnStart");
let btnStop = document.querySelector(".btnStop");
let btnReset = document.querySelector(".btnReset"); // Kullanacagimiz 5 adet tanimi HTML sayfasindan yakaladik ve JS sayfamiza bastirdik.

btnStart.addEventListener("click", () => {
  // console.log(btnStart); //btnStart butonunu yakaldigimizi kontrol ediyoruz.
  interval = setInterval(timer, 10);
});

btnStop.addEventListener("click", () => {
  clearInterval(interval);
});

btnReset.addEventListener("click", () => {
  tens = "00";
  second = "00";
  getSeconds.innerHTML = second;
  getTens.innerHTML = tens;
});

function timer() {
  tens++;

  if (tens <= 9) {
    getTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    getTens.innerHTML = tens;
  }

  if (tens > 99) {
    second++;
    getSeconds.innerHTML = "0" + second;
    tens = 0;
    getTens.innerHTML = "0" + tens;
  }

  if (second > 9) {
    getSeconds.innerHTML = second;
  }
}
