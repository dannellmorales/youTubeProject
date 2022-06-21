import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import Home from "./Components/Home/Home";
import Nav from "./Components/Common/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AboutPage from "./Components/About/AboutPage";


function App() {
  const [videos, setVideos] = useState([])
  const [search, setSearch] = useState('')
  const [submit, setSubmit] = useState(false)
  
  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&q=${search}&key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items)
      });
  }, [submit]);

  return (
    <Router>
      {console.log(videos)}
      <div className="App">
        <Nav search={search} setSearch={setSearch} submit={submit} setSubmit={setSubmit} />
        <Routes>
          <Route className="vids" path="/" element={<Home videos={videos} />} />
          <Route path="/aboutpage" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
