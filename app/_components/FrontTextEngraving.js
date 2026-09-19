"use client";

import { useState } from "react";

export default function FrontTextEngraving({ onTextChange }) {
  const [frontText, setFrontText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setFrontText(text);

    // Pass the clean text payload state back up to the parent component
    if (onTextChange) {
      onTextChange(text.trim());
    }
  };

  return (
    <div className="w-full font-sans pt-5">
      <label className="text-[11px] font-bold uppercase tracking-widest text-stone-700 font-mono block mb-2 cursor-pointer">
        2. Add Text Underneath Photo (Optional)
      </label>

      <input
        id="front-engraving-input"
        type="text"
        value={frontText}
        onChange={handleChange}
        placeholder="e.g., Buddy / Forever Loved"
        maxLength={15}
        className="w-full px-3.5 py-3 border border-stone-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-black transition bg-white text-stone-950 placeholder:text-stone-400 "
      />

      <p className="text-[10px] font-medium text-stone-500 font-mono mt-1.5 text-right">
        {frontText.length}/15 characters max.
      </p>
    </div>
  );
}
