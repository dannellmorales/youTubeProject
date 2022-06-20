import React from 'react'
import YouTube from 'react-youtube'

export default function Home({videos}) {
  
  return (
    <div className="homePage">
      {videos.map((video) => <YouTube videoId={video.id.videoId} />)}
    </div>
  )
}
