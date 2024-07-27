const Course = require('../models/courseModel');
const xlsx = require('xlsx');
const fs = require('fs');

exports.addCourse = async (req, res) => {
    const { title, description, thumbnailLink, studyMaterialLink, youtubePlaylistLink } = req.body;
    let videos = [];

    if (req.file) {
        const workbook = xlsx.readFile(req.file.path);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

        // Extract columns SNO, NAME, and LINK
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            videos.push({
                SNO: row[0],
                NAME: row[1],
                LINK: row[2]
            });
        }

        // Delete the uploaded file from cache
        fs.unlinkSync(req.file.path);
    }

    const course = new Course({
        title,
        description,
        thumbnailLink,
        studyMaterialLink,
        youtubePlaylistLink,
        videos
    });

    try {
        const newCourse = await course.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCourseByID = async (req, res) => {
    try {
    const course = await Course.findById(req.params.id); // Find course by ID
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    console.error('Error fetching course details:', error); // Log the error
    res.status(500).json({ message: 'Error fetching course details' });
  }
}



