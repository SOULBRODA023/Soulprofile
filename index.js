function Updated(){
let todayTime = document.querySelector(".current__time");
let today = document.querySelector(".current__day");
const localDate = new Date();
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
const dayOfWeek = options[localDate.getUTCDay()];
today.textContent = `${dayOfWeek}`

//current UTC Time
const currentUTCTime = localDate.getTime();
todayTime.textContent = currentUTCTime;


}
setInterval(Updated, 1000)