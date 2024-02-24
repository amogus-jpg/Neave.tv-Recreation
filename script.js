const videoPlayer = document.getElementById('videoPlayer');
const context = new AudioContext();

const videos = [
    'video1.mp4',
    'result.mp4',
    'video3.mp4'
    // Add more video URLs as needed
];

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
