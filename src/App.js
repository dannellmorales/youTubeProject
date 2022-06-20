import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import Home from "./Components/Home/Home";
import Nav from "./Components/Common/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./Components/Common/About";
import VideoListing from "./Components/Videos/VideoListing";
// import Video "./Components/Show/Video"

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<VideoListing videos={videos} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
