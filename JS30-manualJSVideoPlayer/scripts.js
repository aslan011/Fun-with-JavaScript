const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = Array.from(player.querySelectorAll('.player__slider'));
const fullscreen = document.getElementById('fullscreen');

let playing = false;
let fullscreenActive = false;

function handlePlay() {
    const method = video.paused ? 'play' : 'pause'
    video[method]()
}

function handleRangeChange() {
    video[this.name] = this.value;
    //this work because you can access these on the DOM by using video.volume
}

function handleSkips() {
    video.currentTime += parseFloat(this.dataset.skip);
}


function updateButton() {
    playing = !playing
    if (playing === true) {
        toggle.textContent = '❚ ❚'
    } else {toggle.textContent = '►'}
    //could also use this.paused ? '►' : '❚ ❚';
}

function updateProgressbar(e) {
    const percent = (video.currentTime / e.target.offsetWidth) * 100
    progressBar.style.flexBasis = `${percent}%`;
    //can use flexbasis here to allow it to grow or shrink
}

function updateCurrentTime(e) {
    const time = (e.layerX/ progress.offsetWidth) * video.duration
    const percent = (e.layerX/ progress.offsetWidth) * 100
    video.currentTime = time
    progressBar.style.flexBasis = `${percent}%`;
}

function fullScreen() {
    if (!fullscreenActive) {
        player.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
    fullscreenActive = !fullscreenActive;
}

video.addEventListener('click', handlePlay)
toggle.addEventListener('click', handlePlay)
ranges.forEach(range => {range.addEventListener('change', handleRangeChange)})
ranges.forEach(range => {range.addEventListener('mousemove', handleRangeChange)})
skipButtons.forEach(skip => {skip.addEventListener('click', handleSkips)})
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', updateProgressbar)

let clicked;
progress.addEventListener('mousedown', () => {
    clicked = true;
})
progress.addEventListener('mousemove', (e) => {
    if (clicked) {
    updateCurrentTime(e)}
})
progress.addEventListener('mouseup', () => {
    clicked = false;
})

video.addEventListener('dblclick', fullScreen)
fullscreen.addEventListener('click', fullScreen)