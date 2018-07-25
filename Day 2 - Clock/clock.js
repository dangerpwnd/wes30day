const sHand = document.querySelector('.secondHand');
const mHand = document.querySelector('.minuteHand');
const hHand = document.querySelector('.hourHand');

function setDate(){
  //console.log("Second");
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  sHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  mHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hHand.style.transform = `rotate(${hoursDegrees}deg)`;

  //console.log(seconds);
  //console.log(secondsDegrees);

}

setInterval(setDate, 1000);

//Need to fix transition after 60 secs when reset occurs
