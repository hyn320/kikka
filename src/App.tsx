// src/App.tsx
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Profile from "./pages/Profile";
import "./App.css";

import companyLogo from './assets/kicka.png';
import userProfile from './assets/yuka.jpg';

export default function App() {
  return (
    <Router>
      <div>
        <div className="mainHeader">
          <div className="logoArea">
            <img src={companyLogo} alt="Company Logo" className="logoIcon" />
            <span className="appName">KiCKA</span>
          </div>
          <div className="navAndIcons">
            <div className="navLinks">
              {/* LinkをNavLinkに置き換える */}
              <NavLink to="/" end>ホーム</NavLink>
              <NavLink to="/gallery">ギャラリー</NavLink>
              <NavLink to="/profile">プロフィール</NavLink>
            </div>
            <div className="headerIcons">
              <img src={userProfile} alt="User Icon" className="userIcon" />
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router >
  );
}