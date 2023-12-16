const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        name: String,
        age: Number,
        grade: String,
        classID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class'
          }
    }
)

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;