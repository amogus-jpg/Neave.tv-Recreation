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
];

let videoPlayer = document.getElementById('videoPlayer');

// Function to play a sound effect
const playSoundEffect = () => {
    const audio = new Audio('misc/click_sfx.mp3'); // Path to your sound effect file
    audio.play();
};

const playVideoWithSound = (videoSrc) => {
    // Stop the current video (if any)
    if (videoPlayer.src) {
        videoPlayer.pause();
        videoPlayer.src = '';
    }

    // Create a new video element
    const newVideo = document.createElement('video');
    newVideo.src = videoSrc;

    // Replace the existing video player with the new video
    videoPlayer.parentNode.replaceChild(newVideo, videoPlayer);
    videoPlayer = newVideo; // Update reference to the new video element

    // Play the new video
    newVideo.play();

    // Play sound effect
    playSoundEffect();
};

const invisibleButton = document.getElementById('invisibleButton');
invisibleButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];
    playVideoWithSound(randomVideo);
});
