import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import { Link } from 'react-router-dom';

export default function Header() {
   const[inputSearch,setInputSearch]=useState('');



  return (
    <div className='header'>
      <div className="header_left">
        <MenuIcon />
        <Link to="/">

        <img className="header__logo" src="../src/images/logo.png" alt="" width="100px" height="30rem" />
        </Link>
      </div>
      
     
        <div className="header__input">
          <input value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)} type="text" placeholder=' Search '  />
          <Link to={`/search/${inputSearch}`}>
          <SearchIcon  className='header__inputButton'/>
          </Link>
        </div>
   


      <div className="header_icon">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <img alt="Naveen Kamat" src="../src/images/avator.jpg" width="45px" height="25%" style={{ border: " solid black", borderRadius: "50%" }} />
      </div>
  
   

     
 
      
      
    </div >
  )
}
