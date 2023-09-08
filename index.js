function Updated(){
let todayTime = document.querySelector(".current__time");
let today = document.querySelector(".current__day");
const options = [
    "Sunday",
    "Monday",
    "Tuesday", 
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

//current Day of the Week 
const dayOfWeek = options[new Date().getUTCDay()];
today.textContent = `${dayOfWeek}`

//current UTC Time
const currentUTCTime = new Date().getTime();
todayTime.textContent = currentUTCTime;


}
setInterval(Updated, 1000)