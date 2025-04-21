import React, { useEffect, useRef } from "react";
import { useState } from "react";

const Trailer = () => {
  const videoRef = useRef(null); // Referência para o vídeo
  const [isPaused, setIsPaused] = useState(true);
  const [isBorded, setIsBorded] = useState(true);

  useEffect(() => {
    setIsBorded(false);
  }, []);

  const playPauseVideo = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPaused(false);
      setIsBorded(true);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <div className="flex justify-center m-auto items-center h-screen">


      <video
        ref={videoRef}
        className={`transition-all ease-in-out duration-1000 mt-180 scroll-reveal w-180 h-100 rounded-sm shadow-lg ${
          !isPaused
            ? "border-2 border-white rounded-2x"
            : "border-2 border-white rounded-2x"
        } ${
          !isBorded
            ? "border-2 border-white rounded-2x"
            : "border-2 border-white rounded-2x"
        }`}
        // Removido o "controls" para esconder os controles nativos
      >
        <source src="video-trailer.mp4" type="video/mp4" />
      </video>


      <button
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-90 -translate-y-1/2 w-16 h-16 p-0 text-white bg-transparent border-2 border-white rounded-full flex items-center justify-center ${
          !isPaused ? "opacity-0" : ""
        }`}
        onClick={playPauseVideo}
      >
        <span className="text-2xl">
          {isPaused ? (
            <>
              <i className="bi bi-play-fill"></i>{" "}
              {/* Exibe Play quando pausado */}
            </>
          ) : (
            <>
              <i className="bi bi-pause-fill"></i>{" "}
              {/* Exibe Pause quando em reprodução */}
            </>
          )}
        </span>
      </button>
    </div>
  );
};

export default Trailer;
