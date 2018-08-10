/* Build out elements */

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector('.progress');
const progress_filled = player.querySelector('progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player_slider');

/* Create functions */

function togglePlay() {
const method = video.paused ? 'play' : 'pause';
video[method]();
  // if(video.pause){
  //   video.play();
  // }
  // else {
  //   video.pause();
  // }
}

function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

/*Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);