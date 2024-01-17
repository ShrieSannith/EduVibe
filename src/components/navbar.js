import React, { useState, useEffect } from 'react';
import logo from "../assets/icons/logo.png";
import hm from "../assets/icons/hm.png";
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {


    
    //RESPONSIVE NAVBAR
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
    if(localStorage.getItem("isLoggedIn")){
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
      }
    })

    const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  }

    useEffect(() => {
    // Function to check the screen width
    const checkScreenWidth = () => {
      setIsSmallScreen(window.innerWidth <= 990);
    };

    // Event listener to detect screen resize
    window.addEventListener('resize', checkScreenWidth);

    // Initial check on component mount
    checkScreenWidth();
    

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenWidth);

    };
    }, []);
    
      const toggleNav = () => {
          setIsNavOpen(!isNavOpen);
          console.log(isNavOpen);
  };
    

    
        return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor: "black", display: "flex", color: "white", justifyContent:"center"}}>
                    <div class="navcontent" style={{display:"block"}}>
                    
                    <div style={{display:'flex', flexDirection:"column"}}>
                            <a className="navbar-brand" href="#" style={{ marginLeft: "30px" }}><img style={{width:"35vh"}} src={logo}></img></a>
                    </div>

                    <div>   
                         <div id="navbarSupportedContent" class="listsearch" style={{display:"flex"}}>
                            <div>
                        <ul className="navbar-nav" style={{
                        display: isSmallScreen ? (isNavOpen ? 'block' : 'none') : 'flex', marginLeft:"10px"
                        }}>
                            <li className="nav-item active">
                             <a className="nav-link" style={{color: "white"}} href="/">Home</a>
                            </li>

                            <li className="nav-item active">
                             <a className="nav-link" style={{color: "white"}} href="/allcourses">Courses</a>
                            </li>
                            <li className="nav-item active">
                             <a className="nav-link" style={{color: "white"}} href="/signin">Connect</a>
                        </li>
                        
                        <li className="nav-item active">
                             <a className="nav-link" style={{color: "white"}} href="/profile">*Profile</a>
                        </li>
                        <li className="nav-item active">
                             <a className="nav-link" style={{color: "white"}} href="/i_uploadedcourses">*Instructor</a>
                        </li>
                        

                            </ul>
                            </div>
                            <div>
                                <form style={{ display: 'flex', float:"center", marginLeft:"25px" }}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{marginLeft:"10px", backgroundColor:"gold", color:"black"}}>Search</button>
                                </form>
                                </div>

                      </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{marginLeft:"20px", position:"absolute", right:"20px", top:"5px"}}>
                        <span  onClick={toggleNav} ><img style={{width:"5vh"}} src={hm}></img></span>
                            </button>
                    </div>
                </div>
            </nav>
        </div>

  )
}

export default Navbar

{/* <li className="nav-item dropdown">

 <div className={`dropdown ${dropdownOpen ? 'show' : ''}`}>
<button
className="btn btn-primary dropdown-toggle"
type="button"
style={{backgroundColor:"#6082B6", borderColor:"#6082B6"}}
onClick={toggleDropdown}
>
Connect with us
</button> 
<div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
<a className="dropdown-item" href="signup">  
    Register
</a>
<a className="dropdown-item" href="signin">
    Login
</a>

</div>
</div>

</li> */}