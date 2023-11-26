import { Avatar } from '@mui/material'
import './VideoCard.css'
import React from 'react'

export default function VideoCard({image,title,channel,timestamp,channelImage,views}) {
  return (
    <div className='videoCard'>
      <img className='videoCard__thumnail' src={image} alt="" />
      <div className="videoCard_info">
      <Avatar className='video_avator' alt={channel} src={channelImage} width="28px" height="25%"  style={{ border: "1px solid black", borderRadius: "50%" }} />
      <div className="videoCard_text">
        <h4>{title}</h4>
        <p className='video_text'>{views}-{timestamp}</p>
      </div>


      </div>

    </div>
    
  )
}
