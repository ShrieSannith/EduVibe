import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import I_uploadedcourses from '../components/instructors/i_uploadedcourses'
const i_uploadedcoursespage = () => {
  return (
    <div>
          <Navbar />
          <I_uploadedcourses />
          {/* <Footer /> */}
    </div>
  )
}

export default i_uploadedcoursespage
