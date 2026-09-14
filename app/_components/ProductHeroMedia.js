"use client";

import { useState, useRef } from "react";

export default function ProductHeroMedia() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square overflow-hidden bg-stone-50 border border-stone-100">
      {/*
        🚀 MAXIMUM HARCODED SPEED CONFIGURATION:
        Bypasses React hooks entirely for rendering. Uses a native web image poster frame
        while loading the high-priority 294KB loop script track layout container.
      */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        fetchPriority="high"
        className="w-full h-full object-cover rounded-none"
      >
        <source src="/loop-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Interactive Audio Unmute Toggle Button badge */}
      <button
        type="button"
        onClick={toggleAudio}
        className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 text-[9px] font-medium tracking-widest font-mono uppercase bg-stone-950/90 text-white py-1 px-2.5 rounded-none active:scale-95 transition-transform border-none outline-none cursor-pointer backdrop-blur-sm"
      >
        <span>{isMuted ? "TAP TO UNMUTE" : "TAP TO MUTE"}</span>
      </button>

      <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-none" />
    </div>
  );
}
