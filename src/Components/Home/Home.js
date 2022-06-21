import React from 'react'
import YouTube from 'react-youtube'

export default function Home({videos}) {
  if (!videos){
    return <h1>Nothing Here Try Again</h1>
  }
  return (
    <div className="homePage">
      {videos.map((video) => <YouTube videoId={video.id.videoId} />)}
    </div>
  )
}
