import React from 'react';
import { Link } from "react-router-dom";

export default function sidebar() {
  return (
    <div className='sidebar'>
        <Link to ="/About">Home</Link>
  <Link to>Explore</Link>
  <Link>Shorts</Link>
  <Link>Subscriptions</Link>
  <Link>Library</Link>
    </div>
  )
}
