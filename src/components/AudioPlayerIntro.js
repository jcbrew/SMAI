import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


const AudioPlayerIntro = () => {
    return (
        <ReactAudioPlayer
            src="intro.mp3"
            autoPlay
            controls />
    )
}


export default AudioPlayerIntro;