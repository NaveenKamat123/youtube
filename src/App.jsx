import React from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RecommendedVideos from './components/RecommendedVideos'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from './components/SearchPage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



export default function App() {
  return (
    <div className='app'>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/search/:searchTerm"  element={
            <div className="app_page">
              <Sidebar />
              <SearchPage/>
             
            </div>} />
          
          <Route path="/" element={
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          }
          />





        </Routes>






      </Router>
    </div>
  )
}
