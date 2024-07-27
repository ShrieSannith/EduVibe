import React from 'react'
import { useState } from 'react';
import '../../courses.css'
import arts from '../../assets/icons/arts1.png'
const Sidebar = () => {
    const [activeLink, setActiveLink] = useState('allCourses');

  // Function to handle link clicks
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
      <div>
          <br/> <br/><br/> <br/><br/> <br/>
        <div class="sidebar">
             <a

        href="/allcourses"

      >
        All Courses
      </a>
      <a
        class="active"
        href="/mycourses"

      >
        My Courses
      </a>
            
        </div>

        <div class="content">
        <div className='categories_grid'>
        <div className='hover07'>
          <div classname='grid_item'>
            <a href='/video'><figure><img style={{ width: "50%" }} src={arts}  /></figure></a>
            <span>Hover</span>
          </div>
          <div classname='grid_item'>
            <figure><img style={{ width: "50%" }} src={arts}  /></figure>
            <span>Hover</span>
          </div>

             </div>  
        </div>
        </div>
    </div>
  )
}

export default Sidebar
