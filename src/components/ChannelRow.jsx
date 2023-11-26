import React from 'react'
import './ChannelRow.css'
import { Avatar } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function ChannelRow({image,Channel,verified,subs,noOfVideos,description}) {
  return (
    <div className='channelRow'>
     
     <Avatar src={image} alt="" className='channelRow__logo'  />

   
     <div className="channelRow__text">
        <h4>{Channel}  {verified==='true' && <CheckCircleOutlineIcon/>  } </h4>

        <p>{subs} subscribers - {noOfVideos} videos</p>
        <p>{description && description.slice(0,60)}</p>

     </div>
    </div>
  )
}
