const videos = [
    'videos/aerobics.mp4',
    'videos/carnival.mp4',
    'videos/club.mp4',
    'videos/special.mp4',
    'videos/giantmonster.mp4',
    'videos/wolf_spirit.mp4',
    'videos/bimbamboom.mp4',
    'videos/driving_guide.mp4',
    'videos/street_monster.mp4',
    'videos/kermit.mp4',
    'videos/lostbabies.mp4',
    'videos/someonehere.mp4',
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
    'videos/hungry.mp4',
    'videos/hehe_train.mp4',
    'videos/heliodisplay.mp4',
    'videos/hells_kitchen.mp4',
    'videos/hotel_mapino.mp4',
    'videos/human_drums.mp4',
    'videos/humans.mp4',
    'videos/infernoptix.mp4',
    'videos/jacko_cat.mp4',
    'videos/kitty_cat.mp4',
    'videos/kittys_wizard.mp4',
    'videos/laptop_drop.mp4',
    'videos/lumasolator.mp4',
    'videos/malfunction.mp4',
    'videos/parking_encounter.mp4',
    'videos/peek_a_boo.mp4',
    'videos/pictures_of_walls.mp4',
    'videos/pizzala_com.mp4',
    'videos/public_brand_study.mp4',
    'videos/setpixel.mp4',
    'videos/squirrel_monster.mp4',
    'videos/theros.mp4',
    'videos/useless_superpower.mp4',
    'videos/wba_cage.mp4',
    'videos/wooden_mirror.mp4',
    'videos/your_height_only.mp4',
    'videos/aerosol.mp4',
    'videos/bomb.mp4',
    'videos/diarrhea.mp4',
    'videos/pigmidance.mp4',
    'videos/tinker-tailor.mp4'
];

let videoPlayer = document.getElementById('videoPlayer');

const playSoundEffect = () => {
    const audioContext = new AudioContext();

    fetch('addit/click_sfx.mp3')
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
