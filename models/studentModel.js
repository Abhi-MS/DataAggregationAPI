const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        name: String,
        age: Number,
        grade: String,
        classID: Number
    }
)

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;