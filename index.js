const playList = ["Fameye-Long-Life-ft.-Kwesi-Arthur.mp3", "Fiokee-Ft-Chike-Gyakie-Follow-You-(TrendyBeatz.com).mp3","Fireboy-DML-Peru-(TrendyBeatz.com).mp3"]

let currentSong = 0;


let audio = new Audio(`${playList[currentSong]}`);

document.querySelector('#playBtn').addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        document.querySelector('#playBtn').innerHTML = `<i class="fa-solid fa-pause"></i>`;
    } else {
        audio.pause();
        document.querySelector('#playBtn').innerHTML = `<i class="fa-solid fa-play"></i>`;    }
})

document.querySelector('#nextBtn').addEventListener('click', () => {
    if (currentSong < playList.length - 1) {
        currentSong++;
        audio.src = `${playList[currentSong]}`;
        try {
            audio.play();
            document.querySelector('#playBtn').innerHTML = `<i class="fa-solid fa-pause"></i>`; 
        } catch (error) {
            console.error('Error playing audio:', error);
        }
    }
});

document.querySelector('#prevBtn').addEventListener('click', () => {
    if (currentSong > 0) {
        currentSong--;
        audio.src = `${playList[currentSong]}`;
        try {
            audio.play();
            document.querySelector('#playBtn').innerHTML = `<i class="fa-solid fa-pause"></i>`; 
        } catch (error) {
            console.error('Error playing audio:', error);
        }
    }
});


const progressBar = document.getElementById('progress-bar');

audio.addEventListener('timeupdate', updateProgressBar);

function updateProgressBar() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = progress + '%';
}