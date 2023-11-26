import React, { useState } from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ExpandMoreOutLinedIcon from '@mui/icons-material/ExpandMoreOutLined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import  './Sidebar.css'


export default function Sidebar() {

  
  return (
    <>
     <div className="sidebar">
        
        <SidebarRow selected Icon={HomeIcon} title="Home"></SidebarRow>
        <SidebarRow Icon={WhatshotIcon} title="Trending"></SidebarRow>
        <SidebarRow  Icon={SubscriptionsIcon} title="Subscription"></SidebarRow>
        <hr  />
        <SidebarRow x Icon={VideoLibraryIcon } title="Library "></SidebarRow>
        <SidebarRow Icon={HistoryIcon} title="History"></SidebarRow>
        <SidebarRow  Icon={OndemandVideoIcon} title="Your Videos"></SidebarRow>
        <SidebarRow x Icon={WatchLaterIcon} title="WatchLater"></SidebarRow>
        <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"></SidebarRow>
        <SidebarRow  Icon={ExpandMoreOutLinedIcon} title="Subscription"></SidebarRow>
        <hr />
       
      

       

     </div>
    </>
  )
}
