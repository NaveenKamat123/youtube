import React from 'react'
import './VideoRow.css'

export default function VideoRow({ views, subs, description, timestamp, channel, title, image }) {
  return (

    <div className='videoRow'>
      <img src={image} alt="" className='video__image' />
      <div className="videoRow__text">
        <h4>{title}</h4>
        <p className='videRow__header'>{channel} -{" "}
          <span className='videorow__sub'><span className='Videorow__subsNumber'>{subs} - Subscribers</span></span>
          {" "}  {views} - {timestamp} </p>
        <p className='videoRow__description'>{description}</p>


      </div>



    </div>
  )
}
