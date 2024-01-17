import React from 'react'
import { useState } from 'react';
import '../../courses.css'
import course from '../../assets/icons/course.png'
const I_uploadedcourses = () => {


  return (
      <div>
          <br/> <br/><br/> <br/><br/> <br/>
        <div class="sidebar">
             <a class='active'
        href="/allcourses"
       
      >
        Uploaded Courses
      </a>
      <a
       
        href="/i_addnewcourse"

      >
        Add new Course
      </a>
            
        </div>

        <div class="content">
                      <div className='categories_grid'>
        <div className='hover07'>
          <div classname='grid_item'>
            <figure><img style={{ width: "50%" }} src={course}  /></figure>
            <span>Hover</span>
          </div>
          <div classname='grid_item'>
            <figure><img style={{ width: "50%" }} src={course}  /></figure>
            <span>Hover</span>
          </div>
          <div classname='grid_item'>
            <figure><img style={{ width: "50%" }} src={course}  /></figure>
            <span>Hover</span>
          </div>
          <div classname='grid_item'>
            <figure><img style={{ width: "50%" }} src={course}  /></figure>
            <span>Hover</span>
          </div>
          <div classname='grid_item'>
            <figure><img style={{ width: "50%" }} src={course}  /></figure>
            <span>Hover</span>
          </div>
          <div classname='grid_item'>
            <figure><img style={{ width: "50%" }} src={course}  /></figure>
            <span>Hover</span>
          </div>
              
          </div>

               
        </div>
        </div>
    </div>
  )
}

export default I_uploadedcourses
