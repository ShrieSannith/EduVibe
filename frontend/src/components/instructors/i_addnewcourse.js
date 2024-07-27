import React, { useCallback, useState } from 'react';
import '../../courses.css';
import { useDropzone } from 'react-dropzone';

const I_addnewcourse = () => {
    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [thumbnailLink, setThumbnailLink] = useState(''); 
    const [excelFile, setExcelFile] = useState(null); 
    const [studyMaterialLink, setStudyMaterialLink] = useState(''); 
    const [youtubePlaylistLink, setYoutubePlaylistLink] = useState(''); 
    const [message, setMessage] = useState(''); 

    // Dropzone setup for Excel file upload
    const onDrop = useCallback((acceptedFiles) => {
        console.log('Dropped files:', acceptedFiles);
        setExcelFile(acceptedFiles[0]); // Set the first file as the Excel file
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: '.xls,.xlsx', // Accept only Excel files
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('thumbnailLink', thumbnailLink);
        formData.append('excelFile', excelFile); // Include the Excel file
        formData.append('studyMaterialLink', studyMaterialLink); 
        formData.append('youtubePlaylistLink', youtubePlaylistLink); 

        try {
            const response = await fetch('http://localhost:5000/api/courses', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to add course');
            }

            const data = await response.json();
            console.log('Response:', data); 
            setMessage('Course added successfully!');
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to add course. Please try again.');
        }
    };

    return (
        <div>
            <br /> <br /><br /> <br /><br /> <br />
            <div className="sidebar">
                <a className='active' href="/i_addnewcourse">Add new Course</a>
            </div>
            
            <div className="content">
                <h3 style={{ color:"white"}}>Add A New Course</h3>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', width: '100%' }}>
                        <h1 style={{ color: "white", fontSize: "25px" }}>Title</h1>
                        <textarea
                            className="form-control"
                            rows="2"
                            style={{ color: "white", backgroundColor: "black", width: "100%" }}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', width: '100%' }}>
                        <h1 style={{ color: "white", fontSize: "25px" }}>Description</h1>
                        <textarea 
                            className="form-control" 
                            rows="3" 
                            style={{ color: "white", backgroundColor: "black", width: "100%" }} 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', width: '100%' }}>
                        <h1 style={{ color: "white", fontSize: "25px" }}>Thumbnail Link</h1>
                        <textarea 
                            className="form-control" 
                            rows="3" 
                            style={{ color: "white", backgroundColor: "black", width: "100%" }} 
                            value={thumbnailLink}
                            onChange={(e) => setThumbnailLink(e.target.value)}
                        />
                    </div>
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', width: '100%' }}>
                        <h1 style={{ color: "white", fontSize: "25px" }}>YouTube Playlist Link</h1>
                        <textarea
                            className="form-control"
                            rows="2"
                            placeholder='Enter YouTube playlist link'
                            value={youtubePlaylistLink}
                            onChange={(e) => setYoutubePlaylistLink(e.target.value)}
                            style={{ color: "white", backgroundColor: "black", width: "100%" }}
                        />
                    </div>
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', width: '100%' }}>
                        <h1 style={{ color: "white", fontSize: "25px" }}>Study Material Link</h1>
                        <textarea
                            className="form-control"
                            rows="2"
                            placeholder='Enter study material link'
                            value={studyMaterialLink}
                            onChange={(e) => setStudyMaterialLink(e.target.value)}
                            style={{ color: "white", backgroundColor: "black", width: "100%" }}
                        />
                    </div>
                    <br />
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'baseline', width: '100%'}}>
                    <h1 style={{ color: "white", fontSize: "25px" }}>Excell Sheet Links</h1></div>
                    <div {...getRootProps()} style={{ border: '2px dashed white', padding: '20px', cursor: 'pointer' }}>
                        <input {...getInputProps()} />
                        <p style={{ color: "white" }}>Drag 'n' drop your Excel file here, or click to select one</p>
                        {excelFile && <p style={{ color: 'white' }}>Selected file: {excelFile.name}</p>}
                    </div>
                    <br />
                    <button
                        className="uploadbutton"
                        style={{ width: "200px", color: "white", backgroundColor: "black" }}
                        type='submit'
                    >
                        Submit
                    </button>
                </form>
                {message && <p style={{ color: 'white' }}>{message}</p>} {/* Display success/error message */}
                <br />
            </div>
        </div>
    );
};

export default I_addnewcourse;
