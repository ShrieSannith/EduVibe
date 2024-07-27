import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode to decode the token
import logo from "../assets/icons/logo.png";
import hm from "../assets/icons/hm.png";
import 'bootstrap/dist/css/bootstrap.css';
// import jwtDecode from "jwt-decode";

const Navbar = () => {
    // State management
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(''); // State for user role
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Check login status and user role on component mount
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            const decodedToken = jwtDecode(token); // Decode the token
            setUserRole(decodedToken.role); // Set user role from token
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    // Logout function
    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("token"); // Remove the token from local storage
        window.location.href = '/EduVibe'; // Redirect to the sign-in page
    };

    // Check screen size for responsive navbar
    useEffect(() => {
        const checkScreenWidth = () => {
            setIsSmallScreen(window.innerWidth <= 990);
        };

        window.addEventListener('resize', checkScreenWidth);
        checkScreenWidth(); // Initial check on component mount

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);
    
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "black", color: "white" }}>
                <div className="navcontent">
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <a className="navbar-brand" href="#" style={{ marginLeft: "30px" }}>
                            <img style={{ width: "20vh" }} src={logo} alt="Logo" />
                        </a>
                    </div>

                    <div>
                        <div id="navbarSupportedContent" className="listsearch" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <ul className="navbar-nav" style={{
                                    display: isSmallScreen ? (isNavOpen ? 'block' : 'none') : 'flex',
                                    marginLeft: "10px"
                                }}>
                                    <li className="nav-item active">
                                        <a className="nav-link" style={{ color: "white" }} href="/EduVibe">Home</a>
                                    </li>
                                    
                                    {isLoggedIn ? (
                                        <>
                                            {userRole === 'Instructor' && (
                                                <li className="nav-item active">
                                                    <a className="nav-link" href = "/i_addnewcourse" style={{ color: "white" }}>Instructor</a> {/* Display role */}
                                                </li>
                                            )}
                                            <li className="nav-item active">
                                        <a className="nav-link" style={{ color: "white" }} href="/allcourses">Courses</a>
                                    </li>
                                            <li className="nav-item active">
                                                <a className="nav-link" style={{ color: "white" }} onClick={handleLogout}>Logout</a>
                                            </li>
                                        </>
                                    ) : (
                                        <li className="nav-item active">
                                            <a className="nav-link" style={{ color: "white" }} href="/signin">Login</a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div>
                                {/* <form style={{ display: 'flex', marginLeft: "25px" }}>
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ marginLeft: "10px", backgroundColor: "black", color: "white" }} />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{ marginLeft: "10px", backgroundColor: "gold", color: "black" }}>Search</button>
                                </form> */}
                            </div>
                        </div>
                        <button className="navbar-toggler" type="button" onClick={toggleNav} style={{ marginLeft: "20px", position: "absolute", right: "20px", top: "5px" }}>
                            <span><img style={{ width: "5vh" }} src={hm} alt="Menu" /></span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
