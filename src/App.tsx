// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
// import Gallery from "./pages/Gallery";
// import Profile from "./pages/Profile";
import "./App.css";

import companyLogo from './assets/kicka.png';
import userProfile from './assets/yuka.jpg';

export default function App() {
  return (
   <Router>
     <div>
       <div className="mainHeader">
         <div className="navLinks">
           <Link to="/">ホーム</Link>
           <Link to="/gallery">ギャラリー</Link>
           <Link to="/profile">プロフィール</Link>
         </div>
         <div className="headerIcons">
           <div className="logoArea">
             <img src={companyLogo} alt="Company Logo" className="logoIcon" />
             <span className="appName">KiCKA</span>
           </div>
           <img src={userProfile} alt="User Icon" className="userIcon" />
         </div>
       </div>
       <Routes>
         <Route path="/" element={<Home />} />
         {/* <Route path="/gallery" element={<Gallery />} />
         <Route path="/profile" element={<Profile />} /> */}
       </Routes>
     </div>
   </Router>
  );
}