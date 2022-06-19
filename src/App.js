import React from "react";
import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home/Home";
import Nav from "./Components/Common/Nav";
import VideoIndex from "./Components/Videos/VideoIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Video "./Components/Show/Video"

function App() {
  const [videos, setVideos] = useState([])
  const [search, setSearch] = useState('')
  const [maxResults, setMaxResults] = useState(10)

  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=345&type=video&q=earth&key=${process.env.REACT_APP_API_KEY}&q=${search}&maxResults=${maxResults}`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data.items));
  }, [search, maxResults]);

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<VideoIndex />} />
          {/* <Route path="/videos/:id" element={<Video/>}/> */}
        </Routes>
      </div>
    </Router>

  )
}

export default App;
