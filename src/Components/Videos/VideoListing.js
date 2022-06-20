import React from 'react'
import YouTube from "react-youtube"

export default function VideoListing({videos}) {
  
  return (
<div>
  {videos.map((video)=><YouTube videoId={video.id.videoId}/> )}
</div>
 )
}
