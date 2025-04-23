import React, { useEffect, useRef, useState } from "react";

const Trailer = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const playPauseVideo = () => {
    const video = videoRef.current;
    if (!hasInteracted) setHasInteracted(true);
    
    if (video.paused) {
      video.play().catch(e => console.error("Error playing video:", e));
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  // Pausar ao sair do viewport (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting && !videoRef.current.paused) {
            videoRef.current.pause();
            setIsPaused(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full h-full mt-60">
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video
          ref={videoRef}
          className={`w-full max-w-4xl shadow-xl transition-all duration-300 ${
            hasInteracted ? 'border-2 border-white' : 'border-2 border-transparent'
          }`}
          onClick={playPauseVideo}
          poster="/video-poster.jpg" // Adicione uma imagem de poster
          aria-label="Game trailer video"
          tabIndex="0"
          onKeyDown={(e) => e.key === ' ' && playPauseVideo()}
        >
          <source src="video-trailer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay de controle */}
        <div 
          className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
            isPaused || isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={playPauseVideo}
        >
          <button
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
              isPaused ? 'bg-white/90' : 'bg-white/50'
            } ${isHovered || isPaused ? 'scale-100' : 'scale-90 opacity-0'}`}
            aria-label={isPaused ? "Play video" : "Pause video"}
          >
            {isPaused ? (
              <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trailer;