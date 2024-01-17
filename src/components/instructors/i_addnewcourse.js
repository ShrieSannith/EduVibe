import React from 'react'
import { useState } from 'react';
import '../../courses.css'
import course from '../../assets/icons/course.png'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import '../../instructors.css'
const I_addnewcourse = () => {


  return (
      <div>
          <br/> <br/><br/> <br/><br/> <br/>
        <div class="sidebar">
             <a 
        href="/i_uploadedcourses"
       
      >
        Uploaded Courses
      </a>
      <a
       class='active'
        href="/i_addnewcourse"

      >
        Add new Course
      </a>
            
        </div>

        <div class="content">
        {/* CONTENT  */}
          <div style={{display:'flex', flexDirection:'column', alignItems:'baseline'}}><h1 style={{color:"white"}}>Title</h1></div>
          <MDBInput wrapperClass='mb-4' style={{color:"white", backgroundColor:"black"}} size="lg"  />
        <br />
        <div style={{display:'flex', flexDirection:'column', alignItems:'baseline'}}><h1 style={{color:"white"}}>Description</h1></div>
          <textarea class="form-control" rows="3" style={{color:"white", backgroundColor:"black"}} size='lg'   />
        <br />
        <div style={{display:'flex', flexDirection:'column', alignItems:'baseline'}}><h1 style={{color:"white"}}>Thumbnail</h1></div>
          <MDBInput  wrapperClass='mb-4' placeholder='Upload resume' id='formControlLg' type='file' size="lg" />
        <br />
        <div style={{display:'flex', flexDirection:'column', alignItems:'baseline'}}><h1 style={{color:"white"}}>Gdrive Link</h1></div>
          <MDBInput  wrapperClass='mb-4'style={{color:"white", backgroundColor:"black"}}  id='formControlLg' type='url' size="lg" />
        <br />
        {/* <div style={{display:'flex', flexDirection:'column', alignItems:'baseline'}}><h1 style={{color:"white"}}>Gdrive Link</h1></div> */}
          <MDBInput  className="uploadbutton" wrapperClass='mb-4'style={{color:"white", backgroundColor:"black"}}  id='formControlLg' type='submit' size="lg" />
        <br />

        


        </div>
    </div>
  )
}

export default I_addnewcourse