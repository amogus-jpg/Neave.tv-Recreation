const videos = [];

// Fetch videos from YouTube playlist
function fetchVideosFromPlaylist(playlistId, pageToken = '') {
    const apiKey = 'AIzaSyDj_4OsyGaF8hAvr5osDZQS6xiVl6fzUV8';
    const maxResults = 50; // Maximum number of results per page

    let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`;
    if (pageToken !== '') {
        url += `&pageToken=${pageToken}`;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const videoId = item.snippet.resourceId.videoId;
                videos.push(`https://www.youtube.com/watch?v=${videoId}`);
            });

            // Check if there are more pages of results
            if (data.nextPageToken) {
                fetchVideosFromPlaylist(playlistId, data.nextPageToken);
            }
        })
        .catch(error => console.error('Error fetching videos:', error));
}

// Replace 'YOUR_PLAYLIST_ID' with your actual playlist ID
const playlistId = 'PLb6qfXDffqNMF-vEquHTCWIL5wRfM-htB&si=qZy3Xyf95QL2kocw';
fetchVideosFromPlaylist(playlistId);

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
