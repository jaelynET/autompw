import { useState, useRef } from "react";

function VideoSlide({ src }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = (e) => {
    e.stopPropagation(); // Prevents swiper framework interference
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full aspect-square overflow-hidden bg-stone-50">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover rounded-none"
      />

      {/* Clean, minimalist interactive audio controller badge */}

      {/* <button
        type="button"
        onClick={toggleAudio}
        className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 text-[9px] font-medium tracking-widest font-mono uppercase bg-stone-950 text-white py-1.5 px-3 rounded-none active:scale-95 transition-transform cursor-pointer"
      >
        <span>{isMuted ? "🔇 Tap to Unmute" : "🔊 Audio Active"}</span>
      </button> */}
      <button
        type="button"
        onClick={toggleAudio}
        className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 text-[9px] font-medium tracking-widest font-mono uppercase bg-stone-950/90 text-white py-1 px-2.5 rounded-none active:scale-95 transition-transform border-none outline-none cursor-pointer backdrop-blur-sm"
      >
        {/* A crisp layout representation that looks like a camera display overlay */}
        <span>{isMuted ? "TAP TO UNMUTE" : "MUTED"}</span>
      </button>

      <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-none" />
    </div>
  );
}
export default VideoSlide;
