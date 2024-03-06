let name = prompt("Lütfen adınızı giriniz: ");

const days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

setInterval(function () {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let hourShow =
    hour.toString().length == 1 ? "0" + hour.toString() : hour.toString();
  let minuteShow =
    minute.toString().length == 1 ? "0" + minute.toString() : minute.toString();
  let secondShow =
    second.toString().length == 1 ? "0" + second.toString() : second.toString();
  let dayShow = days[date.getDay()];

  let time = `${hourShow} : ${minuteShow} : ${secondShow} ${dayShow}`;
  clockDOM.innerText = `${time}`;
}, 1000);

let nameDOM = document.querySelector("#name");
let clockDOM = document.querySelector("#clock");

nameDOM.innerText = `${name}`;
