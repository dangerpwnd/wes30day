window.addEventListener("keydown", function (e){
  //console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(audio);
  if(!audio) return;
  audio.currentTime = 0; //rewinds sound file before play
  audio.play();
  //console.log(key);
  key.classList.add('playing');
})

function removeTransition(e){
  //console.log(e);
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
  //console.log(e.propertyName);

}

const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend', removeTransition));

//Need to add record function, once stopped will hold onto recorded file
//Need to create function to play recorded file on repeat
//Need to add other instruments
