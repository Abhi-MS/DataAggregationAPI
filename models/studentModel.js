const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter student name"]
        },
        age: {
            type: Number,
            required: [true, "Please enter student age"]
        },
        grade: {
            type: String,
            required: [true, "Please enter student grade"]
        },
        classID: mongoose.Types.ObjectId
    },
    {
        timestamps: true
    }
)

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;