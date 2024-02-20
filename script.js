const control = document.getElementById('control');
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('timestamp');
const progress = document.getElementById('progress');

// play pause function, update icon too
function playPause() {
    if (video.paused) {
        control.classList.add('play');
        play.querySelector('i.fa').classList.remove('fa-play');
        play.querySelector('i.fa').classList.add('fa-pause');
        video.play()
    } else {
        control.classList.remove('play');
        play.querySelector('i.fa').classList.remove('fa-pause');
        play.querySelector('i.fa').classList.add('fa-play');
        video.pause();
    }
}


function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
  
    // Get minutes
    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime % 60);
    timestamp.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }




function setProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
  }


// Play Video Control
video.addEventListener('click', playPause);
play.addEventListener('click', playPause);


// Stop Video Control
stop.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
});

//Display Current progress time
video.addEventListener('timeupdate', updateProgress);
    

// Progress slider
progress.addEventListener('click', setProgress);
// progressContainer.addEventListener('click', setProgress);