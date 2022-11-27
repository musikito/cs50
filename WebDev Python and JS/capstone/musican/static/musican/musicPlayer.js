// Base url
const base_url = "static/musican/images/";
// Play Button
const playBtn = document.getElementById("playBtn");
// Stop Button
const stopBtn = document.getElementById("stopBtn");
// Artist Name
const artist_name = document.getElementById("artist_name");
// Player panel
const player = document.getElementById("player");
// Song title
const song_title = document.getElementById("song_title");
// Album art
const song_img = document.getElementById("song_image");


const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#ddd',
    progressColor: '#ff006c',
    barWidth: 4,
    responsive: true,
    height: 90,
    barRadius: 4
});
// wavesurfer.load("static/musican/images/songs/Son_MENTIRAS.mp3");

// $('a#clickIt').click(function () { console.log("hola"); }); 

function stopPlay() {
    playBtn.src = "static/musican/images/play.png";
    wavesurfer.stop();

}

function loadSong(title, url, artist, img_url) {

    // If player is running, stop it
    stopPlay();
    // Load the MP3
    wavesurfer.load(base_url + url);
    // console.log(base_url + url)

    player.style.display = "block";
    artist_name.innerHTML = `${artist}`;
    song_title.innerHTML = `${title}`;
    song_img.src = base_url + `${img_url}`;
    // console.log(title, url, artist, img_url);

} // End of loadSong

stopBtn.onclick = function () {
    playBtn.src = "static/musican/images/play.png";
    wavesurfer.stop();

} // End of stop button

playBtn.onclick = function () {

    wavesurfer.playPause();
    // Change button img accordingly
    if (playBtn.src.includes("play.png")) {
        playBtn.src = "static/musican/images/pause.png";
    } else {
        playBtn.src = "static/musican/images/play.png";
    } // End if
} // End of play button

wavesurfer.on('finish', function () {
    playBtn.src = "static/musican/images/play.png";
    wavesurfer.stop();
})