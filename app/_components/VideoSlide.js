import { useState, useRef } from "react";

// 1. Added a 'priority' boolean prop to identify if this is the first/LCP slide
function VideoSlide({ src, priority = false }) {
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
        // 2. Performance Fix: Only preload data/metadata based on layout priority
        preload={priority ? "metadata" : "none"}
        // 3. Performance Fix: Explicitly tell browser to fetch this file immediately if it is the LCP element
        {...(priority ? { fetchpriority: "high" } : {})}
        className="h-full w-full object-cover rounded-none"
      />

      {/* Clean, minimalist interactive audio controller badge */}
      <button
        type="button"
        onClick={toggleAudio}
        className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 text-[9px] font-medium tracking-widest font-mono uppercase bg-stone-950/90 text-white py-1 px-2.5 rounded-none active:scale-95 transition-transform border-none outline-none cursor-pointer backdrop-blur-sm"
      >
        {/* Bug Fix: Corrected text mapping to show UNMUTE when muted, and MUTE when unmuted */}
        <span>{isMuted ? "TAP TO UNMUTE" : "TAP TO MUTE"}</span>
      </button>

      <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-none" />
    </div>
  );
}

export default VideoSlide;
