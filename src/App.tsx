import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Profile from "./pages/Profile";
import Movie from "./components/Movie";
import styles from "./App.module.css";  // ← module.cssに変更

export default function App() {
  const [showVideo, setShowVideo] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const handleMovieFinish = () => {
    setShowVideo(false);
    setTimeout(() => setFadeIn(true), 50); 
    // 遷移時に一瞬遅らせてフェードイン開始
  };

  return (
    <Router>
      {showVideo ? (
        <Movie onFinish={handleMovieFinish} />
      ) : (
        <div className={`${styles.pageWrapper} ${fadeIn ? styles.show : ""}`}>
          <div className={`${styles.overlay} ${fadeIn ? styles.hide : ""}`} />
          <div className="flex justify-around bg-gray-100 p-4">
            <Link to="/">ホーム</Link>
            <Link to="/gallery">ギャラリー</Link>
            <Link to="/profile">プロフィール</Link>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery/*" element={<Gallery />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}
