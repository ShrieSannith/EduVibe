import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { Container, Grid, Box, List, ListItem, ListItemText, Button } from '@mui/material';
import { MDBContainer } from "mdb-react-ui-kit";
import axios from 'axios';

const VideoPage = () => {
  const { courseId } = useParams(); // Get courseId from URL params
  const [currentVideo, setCurrentVideo] = useState(""); // State to store the currently playing video
  const [videos, setVideos] = useState([]); // State to store videos of the course
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [studyMaterialLink, setStudyMaterialLink] = useState(''); // State to store study material link

  // Fetch course details when the component mounts or courseId changes
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        // Correct the URL to include the courseId
        const response = await axios.get(`http://localhost:5000/api/courses/getById/${courseId}`); 
        const courseData = response.data;
        setVideos(courseData.videos || []); // Set videos state
        setStudyMaterialLink(courseData.studyMaterialLink || ''); // Set study material link
        if (courseData.videos && courseData.videos.length > 0) {
          setCurrentVideo(formatVideoURL(courseData.videos[0].LINK)); // Set the first video as current
        }
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [courseId]); // Depend on courseId to refetch when it changes

  // Format YouTube video URL
  const formatVideoURL = (url) => {
    if (url.includes("youtube.com")) {
      const videoId = url.split('v=')[1];
      const ampersandPosition = videoId.indexOf('&');
      return `https://www.youtube.com/embed/${ampersandPosition !== -1 ? videoId.substring(0, ampersandPosition) : videoId}`;
    }
    return url; // Return the URL as is if it's not a YouTube link
  };

  // Change current video when a video is selected
  const handleVideoChange = (url) => {
    setCurrentVideo(formatVideoURL(url));
  };

  // Filter videos based on search query
  const filteredVideos = videos.filter(video =>
    video.NAME.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MDBContainer style={{ color: 'white' }}>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: '100vh', color: 'white' }}
        >
          <Grid item xs={12} md={8}>
            <Box mt={5}>
              <div className="ratio ratio-16x9">
                {currentVideo && (
                  <iframe
                    src={currentVideo}
                    title="Video player"
                    allowFullScreen
                    style={{ width: '100%', height: '500px' }}
                  ></iframe>
                )}
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box mt={5}>
              <input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ margin: "20px", padding: "10px", borderRadius: "5px", width: "100%" }}
              />
              <List>
                {filteredVideos.length > 0 ? (
                  filteredVideos.map((video) => (
                    <ListItem
                      button
                      key={video._id}
                      onClick={() => handleVideoChange(video.LINK)}
                      style={{ backgroundColor: currentVideo === formatVideoURL(video.LINK) ? '#333' : 'transparent' }}
                    >
                      <ListItemText primary={video.NAME} style={{ color: 'white' }} />
                    </ListItem>
                  ))
                ) : (
                  <p style={{ color: 'white' }}>No videos available.</p>
                )}
              </List>
            </Box>
          </Grid>
          {studyMaterialLink && (
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                href={studyMaterialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Study Material
              </Button>
            </Box>
          )}
        </Grid>
      </Container>
    </MDBContainer>
  );
};

export default VideoPage;
