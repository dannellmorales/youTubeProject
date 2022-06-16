import React from 'react'

export default function VideoIndex() {
  
  getAllVideos(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`)
      .then((response) =>response.json()))
      .catch((json) => {
        console.error(error);
        this.setState({ loadingError: true });
      });
  }
  
  
  
  
  return (
    <div>VideoIndex</div>
  )
}
