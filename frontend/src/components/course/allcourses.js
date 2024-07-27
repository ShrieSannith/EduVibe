import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../courses.css';
import arts from '../../assets/icons/arts1.png';

const Sidebar = () => {
    const [courses, setCourses] = useState([]); // State to store the list of courses
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        // Fetch courses data from the API
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/courses'); // API endpoint
                const data = await response.json();
                console.log('Fetched courses:', data); // Log the fetched data
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    // Filter courses based on the search query
    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCourseClick = (courseId) => {
        navigate(`/video/${courseId}`); // Navigate to the videos page with course ID
    };

    return (
        <div>
            <br /><br /><br /><br /><br /><br />
            <div className="sidebar">
                <a className='active' href="/allcourses">All Courses</a>
                {/* <a href="/mycourses">My Courses</a> */}
            </div>

            <div className="content">
                <h1 style={{ color: "white" }}>Browse Through All The Courses In Our Portal. All The Best!</h1>
                <input 
                    type="text" 
                    placeholder="Search courses..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    style={{ margin: "20px", padding: "10px", borderRadius: "5px", width: "60%", marginBottom:"30px" }}
                />
                <div className='categories_grid'>
                    {filteredCourses.length > 0 ? filteredCourses.map((course) => {
                        const thumbnail = course.thumbnailLink;
                        return (
                            <div className='hover07' key={course._id} onClick={() => handleCourseClick(course._id)}>
                                <div className='grid_item'>
                                    <figure>
                                        <img style={{ width: "50%" }} src={thumbnail} alt="COURSE IMAGE" />
                                    </figure>
                                    <h1 style={{ color: "white" }}>{course.title}</h1>
                                    <span>{course.title}</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column" }}>
                                    <div style={{ display: "block", alignItems: "flex-start" }}>
                                        <h3 style={{ color: "white", textAlign: "left" }}>{course.title}</h3>
                                        <h5 style={{ color: "white", textAlign: "left" }}>{course.description}</h5>
                                    </div>
                                </div>
                            </div>
                        );
                    }) : (
                        <p style={{ color: 'white' }}>No courses available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
