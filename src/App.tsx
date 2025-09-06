import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Profile from "./pages/Profile";
import Movie from "./components/Movie";
// import SpecialScreen from "./pages/SpecialScreen";

export default function App() {
  const [showVideo, setShowVideo] = useState(true);
  // const [showSpecial, setShowSpecial] = useState(true);

  return (
    <Router>
      {showVideo ? (
        <Movie onFinish={() => setShowVideo(false)} />
      ) : (
        <>

      {/* {showSpecial ? (
        <SpecialScreen onFinish={() => setShowSpecial(false)} />
      ) : (
        <> */}

          <div className="flex justify-around bg-gray-100 p-4">
            <Link to="/">ホーム</Link>
            <Link to="/gallery">ギャラリー</Link>
            <Link to="/profile">プロフィール</Link>
          </div>

          <Routes>
           {/* {showVideo && <Movie />} */}
            <Route path="/" element={<Home />} />
            <Route path="/gallery/*" element={<Gallery />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

        </>
      )} 
    </Router>
  );
}

