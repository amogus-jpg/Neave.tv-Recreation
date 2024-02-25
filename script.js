const playlist = [];

videos.push('videos/carnival.mp4');
videos.push('videos/club.mp4');
videos.push('videos/darkstar.mp4');
videos.push('videos/conflict.mp4');
videos.push('videos/goats.mp4');
videos.push('videos/germs.mp4');
videos.push('videos/handdj.mp4');
videos.push('videos/hamsters.mp4');
videos.push('videos/dog.mp4');
videos.push('videos/eegah.mp4');
videos.push('videos/kick.mp4');
videos.push('videos/hardbass.mp4');
videos.push('videos/letsgetit.mp4');
videos.push('videos/noodlemonster.mp4');

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
