const mongoose = require('../configurations/dbConfig');

const courseSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    thumbnailLink: { type: String },
    studyMaterialLink: { type: String },
    youtubePlaylistLink: { type: String },
    videos: [
        {
            SNO: { type: Number },
            NAME: { type: String },
            LINK: { type: String }
        }
    ]
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
