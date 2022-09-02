import React,{useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
import './Video.css'


export default function Video() {




  return (
    <div className="video">
   <ReactPlayer width='70%' height='90%' className="video-play" url='https://www.youtube.com/watch?v=RErc4v6zBOo'
    config={{
        youtube: {
          playerVars: { showinfo: 1 }
        }
    }}
    
    
   ></ReactPlayer>
   </div>
  )
}
