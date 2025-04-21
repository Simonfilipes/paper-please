import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

const PlayMusicButton = () => {
    
    const audioRef = useRef(null);
    const[isPlaying, setIsPlaying] = useState(false);

    const PlayMusic = () => {
      if (audioRef.current) {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
      }
    };


  return (
    <div>
    <button onClick={PlayMusic} className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 w-45 h-20 text-2xl bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        {isPlaying ? (
            <>Play Music <i class="bi bi-pause-fill"></i></>
        ) : (
            <>Play Music <i className="bi bi-play-fill"></i></>
        )}
    </button>

    <audio ref={audioRef} src="music.mp3"></audio>
    </div>
  )
}

export default PlayMusicButton