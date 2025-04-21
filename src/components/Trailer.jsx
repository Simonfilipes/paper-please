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
    <div className="bg-black text-purple-50 h-screen flex bg-cover bg-left bg-[url(/bg3.webp)]">
      <div className="flex items-center mx-auto flex-col">
        <h1 className="scroll-reveal text-6xl mt-10">Trailer</h1>
        <div className="relative w-full max-w-4xl">
          <video
            ref={videoRef}
            className={`transition-all ease-in-out duration-1000 scroll-reveal mt-10 w-full h-auto shadow-lg ${
              !isPaused ? "border-4 border-white rounded-2x" : "border-4 border-white rounded-2x"
            } ${!isBorded ? "border-4 border-white rounded-2x" : "border-4 border-white rounded-2x"}`}
            // Removido o "controls" para esconder os controles nativos
          >
            <source src="video-trailer.mp4" type="video/mp4" />
          </video>

          {/* Botão para controle de play/pause */}
          <button
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 p-0 text-white bg-transparent border-2 border-white rounded-full flex items-center justify-center ${
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
      </div>
    </div>
  );
};

export default Trailer;
