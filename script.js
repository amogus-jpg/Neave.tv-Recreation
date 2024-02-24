const videoPlayer = document.getElementById('videoPlayer');
const invisibleButton = document.getElementById('invisibleButton');

const videos = [
    'video1.mp4',
    'result.mp4',
    'a-visitor.mp4'
];

invisibleButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];
    videoPlayer.src = randomVideo;
    videoPlayer.play();
});
