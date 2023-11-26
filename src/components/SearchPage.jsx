import React from 'react'
import './SearchPage.css'
import TuneOutLinedIcon from '@mui/icons-material/TuneOutLined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

export default function SearchPage({inputSearch}) {
  return (
      
    <div className='searchPage'>
        <div className="searchPage__filter">
            <TuneOutLinedIcon/><h2>Filter</h2>
           
        </div>
        <hr />
        <ChannelRow
        image="../src/images/logo.png"
        Channel="NaveenKamat"
        verified="true"
        subs="2M"
        noOfVideos={382}
        description="You can found Naveen Latest video"
        
        
        />
        <hr />
        <h3>Latest from {inputSearch}</h3>
        <br />
        <VideoRow

        views="3.M"
        subs="3.9M"
        description="video of your interst latest video"
        timestamp="12-090203030"
        channel="Naveen Kamat"
        title="Padaku video"
        image="../src/images/logo.png"
 />
        <VideoRow

        views="3.M"
        subs="3.9M"
        description="video of your interst latest video"
        timestamp="12-090203030"
        channel="Naveen Kamat"
        title="Padaku video"
        image="../src/images/logo.png"
 />
        <VideoRow

        views="3.M"
        subs="3.9M"
        description="video of your interst latest video"
        timestamp="12-090203030"
        channel="Naveen Kamat"
        title="Padaku video"
        image="../src/images/logo.png"
 />
        <VideoRow

        views="3.M"
        subs="3.9M"
        description="video of your interst latest video"
        timestamp="12-090203030"
        channel="Naveen Kamat"
        title="Padaku video"
        image="../src/images/logo.png"
 />
        <VideoRow

        views="3.M"
        subs="3.9M"
        description="video of your interst latest video"
        timestamp="12-090203030"
        channel="Naveen Kamat"
        title="Padaku video"
        image="../src/images/logo.png"
 />
        
    </div>

  )
}
