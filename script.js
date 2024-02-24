const videoPlayer = document.getElementById('videoPlayer');
const invisibleButton = document.getElementById('invisibleButton');

const videos = [
    'video1.mp4',
    'video2.mp4',
    'video3.mp4'
];

invisibleButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];
    videoPlayer.src = randomVideo;
    videoPlayer.play();
});
