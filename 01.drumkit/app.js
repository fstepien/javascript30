function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  //The currentTime property sets or returns the current position (in seconds) of the video playback. - w3school
  if(!audio) return;

  audio.play();
  key.classList.add('playing');
}

window.addEventListener('keydown', playSound);

window.addEventListener('keyup', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.playing`);
  if(e.keyCode > 96 && e.keyCode < 106) {
  audio.pause();
  audio.currentTime = 0;
  key.classList.remove('playing');
  } else {return}
});

document.body.addEventListener('mousedown', (e) => {
  if(e.target.parentElement.classList.contains('key')){
    dataKey = e.target.parentElement.dataset.key;
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
  
  const key = document.querySelector(`.key[data-key="${dataKey}"]`);
  if(!audio) return;
  audio.play();
  key.classList.add('playing');
  }
});
document.body.addEventListener('mouseup', (e) => {
  if(e.target.parentElement.classList.contains('key')){
    dataKey = e.target.parentElement.dataset.key;
  const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
  const key = document.querySelector(`.playing`);
  if(dataKey > 96 && dataKey < 106) {
  audio.pause();
  audio.currentTime = 0;
  key.classList.remove('playing');
  } else {return}
  }

});