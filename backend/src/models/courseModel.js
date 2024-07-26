const mongoose = require('../configurations/dbConfig');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        
    },
    description: {
        type: String,
        
    },
    thumbnailLink: {
        type: String,
        
    },
    studyMaterialLink: {
        type: String,
        
    },
    youtubePlaylistLink: {
        type: String,

    },
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
