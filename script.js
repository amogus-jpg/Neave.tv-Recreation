const videos = [
    'videos/carnival.mp4',
    'videos/club.mp4',
    'videos/darkstar.mp4',
    'videos/conflict.mp4',
    'videos/goats.mp4',
    'videos/germs.mp4',
    'videos/handdj.mp4',
    'videos/hamsters.mp4',
    'videos/dog.mp4',
    'videos/eegah.mp4',
    'videos/kick.mp4',
    'videos/hardbass.mp4',
    'videos/letsgetit.mp4',
    'videos/noodlemonster.mp4',
    'videos/hellodave.mp4',
    'videos/motorcycle.mp4',
    'videos/ronald.mp4',
    'videos/owls.mp4',
    'videos/spoon.mp4',
    'videos/prank.mp4',
    'videos/outbreak.mp4',
    'videos/objectification.mp4',
    'videos/scenario.mp4',
    'videos/skifcha.mp4',
    'videos/xmas.mp4',
    'videos/zone.mp4',
    'videos/weirddog.mp4',
    'videos/washer.mp4',
    'videos/streetlamp.mp4',
    'videos/melt.mp4',
    'videos/kkssee.mp4',
    'videos/reallymelt.mp4',
    'videos/pjotro.mp4',
    'videos/peppino.mp4',
    'videos/bears.mp4',
    'videos/lovely.mp4',
    'videos/dunno.mp4',
    'videos/devilgirl.mp4',
    'videos/furbyad.mp4',
    'videos/hungry.mp4'
];

let videoPlayer = document.getElementById('videoPlayer');

const playSoundEffect = () => {
    const audioContext = new AudioContext();

    fetch('sounds/sound_effect.mp3')
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
            const source = audioContext.createBufferSource();
            source.buffer = audioBuffer;

            source.connect(audioContext.destination);

            source.start();
        })
        .catch(error => {
            console.error('Error loading sound effect:', error);
        });
};

const playVideoWithSound = (videoSrc) => {
    if (videoPlayer.src) {
        videoPlayer.pause();
        videoPlayer.src = '';
    }

    const newVideo = document.createElement('video');
    newVideo.src = videoSrc;

    videoPlayer.parentNode.replaceChild(newVideo, videoPlayer);
    videoPlayer = newVideo;

    newVideo.play();

    playSoundEffect();
};

const invisibleButton = document.getElementById('invisibleButton');
invisibleButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];
    playVideoWithSound(randomVideo);
});
