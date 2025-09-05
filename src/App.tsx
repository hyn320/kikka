import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
// import Profile from "./pages/Profile";


export default function App() {
  return (
    <Router>
      <div className="flex justify-around bg-gray-100 p-4">
        <Link to="/">ホーム</Link>
        <Link to="/gallery">ギャラリー</Link>
        <Link to="/profile">プロフィール</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/*" element={<Gallery />} />
        {/*<Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
}

