const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course');
const multer = require('multer');
const upload = multer({ dest: "../../uploads"}); // Adjust the destination as needed

// Route to add a new course
router.post('/', upload.single('excelFile'), courseController.addCourse);

// Route to get all courses
router.get('/', courseController.getCourses);

router.get('/getById/:id', courseController.getCourseByID);

module.exports = router;
