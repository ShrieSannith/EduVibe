import React from 'react'
import mentor from '../../assets/icons/mentor.png'

const welcome = () => {
  return (
    <div className='welcome_box' style={{marginTop: "10px !important"}}>
        <div className='welcome_image'>
        <img style={{width:"100%", height:"100%"}} src={mentor}/>
      </div>
          <div style={{marginLeft:"50px"}} className='welcome_text'>
          <h1>Want to share your
        knowledge? Join us
        a Mentor</h1>
        <p>We warmly welcome anyone who is ready to teach. Sign up and we will get back to you soon!</p>
          <a  href='/i_signup'><button class="button-49" role="button">Join us</button></a> 
      </div>
      <br/><br/><br/><br/>
    </div> 
  )
}

export default welcome
