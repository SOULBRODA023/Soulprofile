let todayTime = document.querySelector(".current__time");
let today = document.querySelector(".current__day");
const localDate = new Date();
const options = {weekday: 'long'}

const day = localDate.toLocaleDateString('en-US', options)

today.textContent = day
todayTime.textContent = utcString