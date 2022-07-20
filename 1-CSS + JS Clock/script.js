const secondHand = document.querySelector(".clock-second");
const minutesHand = document.querySelector(".clock-minute");
const hourHand = document.querySelector(".clock-hour");
function setDate() {
  const date = new Date();

  const seconds = date.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = date.getMinutes();
  const minuteDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hour = date.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
clearInterval(setDate);
