/* eslint-disable indent */
import React from 'react';
import menuicon from '../../Assets/images/menuicon.png'
import zenopticslogo from '../../Assets/images/zenopticslogo.png'
import home from '../../Assets/images/home.png'
import profile from '../../Assets/images/profile.png'
import squarefour from '../../Assets/images/SquaresFour.png'
import bell from '../../Assets/images/Bell.png'
import searchicon from '../../Assets/images/searchicon.png'
import { useNavigate } from 'react-router';


import './header.scss'



/**
 * This function creates Header
 * @param : void
 * @returns :void
 * Author: Abhilash
 */
export const Header=()=>{
  const navigate=useNavigate();
  const sub=()=>{
    navigate('/');
  }
  return (

    <>
      <div className='header'>
        <div className='header_leftsection'> 
        
          <div className='header_leftsection-zenoptics'>
            <img src={zenopticslogo} alt="zenoptics_logo" />
          </div>
          <div className='header_leftsection-menuicon'>
            <img src={menuicon} alt="menuiconlogo" />
          </div>
          <div className='header_leftsection-line'>
          </div>
          <div className='header_leftsection-home'>
            <img src={home} alt="zenoptics_logo" onClick={sub}/>
          </div>
        </div>
        <div className='header_rightsection'>
        <div className="header_rightsection-searchbar">
        <div className='header_rightsection-searchbar-icon'><img src={searchicon} alt="" /></div>
            <input
              type="text"
              placeholder="Search for reports...."
              className="header_rightsection-searchbar-input"
            />
          </div>
        <div className='header_rightsection-squarefour'>
            <img src={squarefour} alt="zenoptics_logo" />
          </div>
          <div className='header_rightsection-bell'>
            <img src={bell} alt="zenoptics_logo" />
          </div>
          <div className='header_rightsection-profile'>
            <img src={profile} alt="zenoptics_logo" />
          </div>
        </div>
      </div>
    </>
  );
}

// export default Header;