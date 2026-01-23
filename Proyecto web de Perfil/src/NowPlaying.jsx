import { useRef, useState } from "react";

export default function NowPlaying() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="">
      
      {/* Disco */}
      <div className={`relative w-14 h-14 flex-shrink-0 ${playing ? "animate-spin-slow" : ""}`}>
        <div className="w-full h-full rounded-full bg-gradient-to-r from-teal-500 to-blue-500"></div>
        <div className="absolute inset-2 bg-[#161618] rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white/20 rounded-full"></div>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 overflow-hidden">
        <p className="text-white text-sm font-semibold truncate">
          Anytime Now
        </p>
        <p className="text-[10px] opacity-50 uppercase tracking-tighter truncate">
          Tommy & The High Pilots
        </p>
      </div>

      {/* Botón */}
      <button
        onClick={toggleMusic}
        className="text-white/40 hover:text-white transition-colors text-2xl"
      >
        <i className={playing ? "ri-pause-circle-fill" : "ri-play-circle-fill"}></i>
      </button>

      {/* Audio */}
      <audio ref={audioRef} src="/music/anytime-now.mp3" />
    </div>
  );
}
