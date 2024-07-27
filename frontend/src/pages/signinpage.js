import React from 'react'
import Signin from '../components/connect/signin'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Welcome from '../components/home/welcome';

const Signinpage = () => {
  return (
      <div>
      <Navbar />
      {/* <Welcome/> */}
          <Signin />
          <Footer />
    </div>
  )
}

export default Signinpage
