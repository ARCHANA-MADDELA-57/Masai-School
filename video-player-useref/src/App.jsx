import { useRef, useState } from "react";
import "./App.css";

function App() {
  const videoRef = useRef(null);

  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // useRef based controls
  const playVideo = () => videoRef.current.play();
  const pauseVideo = () => videoRef.current.pause();
  const forwardVideo = () => (videoRef.current.currentTime += 5);
  const rewindVideo = () => (videoRef.current.currentTime -= 5);

  // useState based navigation
  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex(
      (prev) => (prev - 1 + videos.length) % videos.length
    );
  };

  return (
    <div className="app-container">
      <h2 className="app-title">Video Player Using useRef</h2>

      <video
        ref={videoRef}
        className="video-player"
        src={videos[currentVideoIndex]}
      />

      <div className="controls">
        <button onClick={playVideo}>▶ Play</button>
        <button onClick={pauseVideo}>⏸ Pause</button>
        <button onClick={forwardVideo}>⏩ Forward 5s</button>
        <button onClick={rewindVideo}>⏪ Rewind 5s</button>
      </div>

      <div className="navigation">
        <button onClick={prevVideo}>⏮ Previous</button>
        <button onClick={nextVideo}>⏭ Next</button>
      </div>
    </div>
  );
}

export default App;
