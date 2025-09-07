import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Movie from "./components/Movie";
import styles from "./App.module.css";  // ← module.cssに変更
import Profile from "./pages/Profile";
import companyLogo from './assets/kicka.png';
import userProfile from './assets/yuka.jpg';

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

        <>
          <div className="mainHeader">
            <div className="logoArea">
              <img src={companyLogo} alt="Company Logo" className="logoIcon" />
              <span className="appName">KiCKA</span>
            </div>
            <div className="navAndIcons">
              <div className="navLinks">
                <NavLink to="/" end>ホーム</NavLink>
                <NavLink to="/gallery">ギャラリー</NavLink>
                <NavLink to="/profile">プロフィール</NavLink>
              </div>
              <div className="headerIcons">
                <img src={userProfile} alt="User Icon" className="userIcon" />
              </div>
            </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery/*" element={<Gallery />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </>
      )}
    </Router>
  );
}
