import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
      <div className='footer'>
          
         
           <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">EduVibe, a global online learning platform based in India, offers a diverse range of courses in Arts, Sciences, Business, and more. With a focus on interactive learning, it provides a seamless, responsive experience for learners worldwide. Benefit from expert faculty and a rich cultural backdrop, making education accessible and enriching.</p>
          </div>

          {/* <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div> */}
        {/* </div> */}
{/*         
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div> */}

          <div class="col-md-6 col-sm-10 col-xs-10">
            <ul class="social-icons">
                    <li><a className="facebook" href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                <li><a className="twitter" href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                <li><a className="dribbble" href="#"><FontAwesomeIcon icon={['fab', 'dribbble']} /></a></li>
                <li><a className="linkedin" href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>  
            </ul>
          </div>
        </div>
      </div>
</footer>
            
          
     </div>
        

  )
}

export default Footer
