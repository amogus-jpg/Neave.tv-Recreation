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

let videoPlayer = document.getElementById('videoPlayer');
const context = new AudioContext();

const playVideoWithSound = (videoSrc) => {
    // Stop the current video (if any)
    if (videoPlayer.src) {
        videoPlayer.pause();
        videoPlayer.src = '';
    }

    // Create a new video element
    const newVideo = document.createElement('video');
    newVideo.src = videoSrc;

    // Create a media element audio source node
    const source = context.createMediaElementSource(newVideo);

    // Connect the audio source to the audio context output
    source.connect(context.destination);

    // Replace the existing video player with the new video
    videoPlayer.parentNode.replaceChild(newVideo, videoPlayer);
    videoPlayer = newVideo; // Update reference to the new video element

    // Play the new video
    newVideo.play();
};

const invisibleButton = document.getElementById('invisibleButton');
invisibleButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];
    playVideoWithSound(randomVideo);
});
