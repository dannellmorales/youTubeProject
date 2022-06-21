import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import Home from "./Components/Home/Home";
import Nav from "./Components/Common/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/Common/About";
import VideoListing from "./Components/Videos/VideoListing";
// import Navbar from "./Components/Navbar";
// import Video "./Components/Show/Video"
import sidebar from "./Components/sidebar";
import Anime from "./Components/Common/Anime";
import { Link } from "react-router-dom";



function App() {
  const [videos, setVideos] = useState([])
  const [search, setSearch] = useState('')
  const [maxResults, setMaxResults] = useState(10)

  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=345&type=video&q=${search}&key=${process.env.REACT_APP_API_KEY}&q=${search}&maxResults=${maxResults}`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data.items));
  }, [search, maxResults]);

  return (
    <Router>
      <div className="App">
        <Nav setSearch={setSearch} setMaxResults={setMaxResults} />
        <Anime />
        <sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<VideoListing videos={videos} />} />
          <Route path="/sidebar" element={<sidebar sidebar={sidebar} />} />
         
        </Routes>
      </div>
    </Router>
  )
}

export default App;
