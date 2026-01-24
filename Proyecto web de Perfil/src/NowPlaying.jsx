import { useState, useRef, useEffect } from 'react';

// Import music files
import birds from './assets/musica/SpotiDownloader.com - Birds - Imagine Dragons.mp3';
import cinnamon from './assets/musica/SpotiDownloader.com - Cinnamon (feat. Albert Hammond Jr) - Damiano David.mp3';
import fearForNobody from './assets/musica/SpotiDownloader.com - Fear for Nobody - Måneskin.mp3';
import freedom from './assets/musica/SpotiDownloader.com - Freedom - Pharrell Williams.mp3';
import offMyFace from './assets/musica/SpotiDownloader.com - OFF MY FACE - Måneskin.mp3';

const SONGS = [
  {
    title: "Birds",
    artist: "Imagine Dragons",
    src: birds
  },
  {
    title: "Cinnamon",
    artist: "Damiano David",
    src: cinnamon
  },
  {
    title: "Fear for Nobody",
    artist: "Måneskin",
    src: fearForNobody
  },
  {
    title: "Freedom",
    artist: "Pharrell Williams",
    src: freedom
  },
  {
    title: "OFF MY FACE",
    artist: "Måneskin",
    src: offMyFace
  }
];

function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const currentSong = SONGS[currentSongIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(error => console.log("Playback failed", error));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSongIndex]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setCurrentTime(current);
      if (total) {
        setDuration(total);
        setProgress((current / total) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const newProgress = e.target.value;
    const newTime = (newProgress / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(newProgress);
  };

  const handleEnded = () => {
    handleNext();
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % SONGS.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    // If we are more than 3 seconds in, restart song
    if (currentTime > 3) {
      audioRef.current.currentTime = 0;
    } else {
      setCurrentSongIndex((prev) => (prev - 1 + SONGS.length) % SONGS.length);
      setIsPlaying(true);
    }
  };

  const formatTime = (time) => {
    if (!time) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={currentSong.src}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      {/* Album Art / Vinyl */}
      <div style={{ position: 'relative', width: '4rem', height: '4rem', flexShrink: 0 }}>
        <div
          className="vinyl-animation"
          style={{
            width: '100%', height: '100%',
            borderRadius: '50%',
            background: 'linear-gradient(to right, #14b8a6, #3b82f6)',
            boxShadow: '0 0 15px rgba(20, 184, 166, 0.3)',
            animationPlayState: isPlaying ? 'running' : 'paused'
          }}
        ></div>
        <div style={{
          position: 'absolute', inset: '0.75rem',
          background: '#161618', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '2px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ width: '0.5rem', height: '0.5rem', background: '#3b82f6', borderRadius: '50%' }}></div>
        </div>
      </div>

      {/* Info & Controls */}
      <div style={{ flex: 1, marginLeft: '1.25rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        {/* Top Row: Info */}
        <div style={{ marginBottom: '0.25rem' }}>
          <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: '1.2' }}>
            {currentSong.title}
          </p>
          <p style={{ fontSize: '0.75rem', opacity: 0.6, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {currentSong.artist}
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '9px', opacity: 0.5, minWidth: '24px' }}>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            style={{
              flex: 1,
              height: '3px',
              borderRadius: '2px',
              background: `linear-gradient(to right, #14b8a6 ${progress}%, rgba(255,255,255,0.1) ${progress}%)`,
              appearance: 'none',
              cursor: 'pointer'
            }}
          />
          <span style={{ fontSize: '9px', opacity: 0.5, minWidth: '24px', textAlign: 'right' }}>{formatTime(duration)}</span>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
          <i onClick={handlePrev} className="ri-skip-back-fill" style={{ cursor: 'pointer', fontSize: '1.1rem', opacity: 0.7, transition: '0.2s', color: 'white' }}></i>

          <div onClick={togglePlay} style={{
            width: '2rem', height: '2rem', borderRadius: '50%',
            background: 'white', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: '0 0 10px rgba(255,255,255,0.2)'
          }}>
            <i className={isPlaying ? "ri-pause-fill" : "ri-play-fill"} style={{ fontSize: '1.2rem' }}></i>
          </div>

          <i onClick={handleNext} className="ri-skip-forward-fill" style={{ cursor: 'pointer', fontSize: '1.1rem', opacity: 0.7, transition: '0.2s', color: 'white' }}></i>
        </div>

      </div>
    </>
  );
}

export default NowPlaying;
