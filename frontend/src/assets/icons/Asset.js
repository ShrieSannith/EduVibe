import React, { useState } from "react";
import {createTheme} from "@mui/material/styles";
import {
  ThemeProvider,
  Container,
  Typography,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
} from "@mui/material";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#039BE5",
    },
    secondary: {
      main: "#F50057",
    },
  },
});

const VideoBulkUpload = () => {
  const [videos, setVideos] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("Processing");

  const handleUpload = async (event) => {
    const files = event.target.files;
    setUploadStatus("Uploading");

    // Upload the videos to the server here

    // Once the videos have been uploaded, set the upload status to "Finished"
    setUploadStatus("Finished");
  };

  const renderVideoTable = () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {videos.map((video) => (
            <TableRow key={video.id}>
              <TableCell>{video.title}</TableCell>
              <TableCell>{video.type}</TableCell>
              <TableCell>{video.duration}</TableCell>
              <TableCell>{video.status}</TableCell>
              <TableCell>{video.createdAt}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h2">Video Bulk Upload</Typography>
          <Button variant="contained" color="primary" disabled={uploadStatus === "Finished"}>
            Upload Videos
          </Button>
        </Box>

        <Box sx={{ margin: 10 }}>
          <input
            type="file"
            multiple
            onChange={handleUpload}
          />
          <Button variant="primary" disabled={uploadStatus === "Finished"}>
            Upload Videos
          </Button>

          {uploadStatus === "Processing" && (
            <CircularProgress sx={{ marginLeft: 10 }} />
          )}
        </Box>

        <Box sx={{ margin: 10 }}>
          {uploadStatus === "Finished" && renderVideoTable()}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default VideoBulkUpload;
