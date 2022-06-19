import React from 'react'
import { useEffect } from "react";
import {getAllVideos} from "../../API/Fetch"

export default function VideoIndex() {
  console.log(process.env)
  useEffect(()=> {
   getAllVideos()
  }, [])
  
  return (
    <div>VideoIndex</div>
  )
}
