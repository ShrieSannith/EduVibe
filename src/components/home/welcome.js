import React from 'react'
import student from '../../assets/icons/student2.png'

const Mentor = () => {
  return (
    <div className='welcome_box'>
        <div className='welcome_image'>
        <img style={{width:"100%", height:"100%"}} src={student}/>
      </div>
        <div className='welcome_text'>
          <h1>Grow up your skills
              by online courses
          with EduVibe</h1>
        <p>EduVibe is a Global training provider based in India that specializes in accredited and bespoke training courses. We crush the   barriers to getting a degree.</p>
          <div className='search'>
            <form style={{ display: 'flex', float:"center", marginLeft:"25px" }}>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="button-49" role="button">Search</button>
            </form>
            </div>
       </div>
    </div>
  )
}

export default Mentor
