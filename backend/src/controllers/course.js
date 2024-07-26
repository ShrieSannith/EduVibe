const Course = require('../models/courseModel');

exports.addCourse = async (req, res) => {
    const { title, description, thumbnailLink, studyMaterialLink, youtubePlaylistLink } = req.body;
    const course = new Course({
        title,
        description,
        thumbnailLink,
        studyMaterialLink,
        youtubePlaylistLink,
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
