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
    'videos/noodlemonster.mp4'
];

const videoPlayer = document.getElementById('videoPlayer');
const context = new AudioContext();

const playVideoWithSound = (videoSrc) => {
    // Create a video element
    const video = document.createElement('video');
    video.src = videoSrc;

    // Create a media element audio source node
    const source = context.createMediaElementSource(video);

    // Connect the audio source to the audio context output
    source.connect(context.destination);

    // Play the video
    video.play();
};

invisibleButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];
    playVideoWithSound(randomVideo);
});
