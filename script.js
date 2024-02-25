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
    'videos/prank.mp4'
];

const videoPlayer = document.getElementById('videoPlayer');
const context = new AudioContext();

const playSoundEffect = () => {
    const audio = new Audio('misc/click_sfx.mp3'); // Path to your sound effect file
    audio.play();
};

const playVideoWithSound = (videoSrc) => {
    const video = document.createElement('video');
    video.src = videoSrc;

    const source = context.createMediaElementSource(video);

    source.connect(context.destination);

    video.play();

    playSoundEffect();
};

invisibleButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];
    playVideoWithSound(randomVideo);
});
