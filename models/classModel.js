const mongoose = require('mongoose');

const classSchema = mongoose.Schema(
    {
        subject:String,
        numberOfStudents:Number,
        teacherID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Teacher'
          }
    }
)

const Class = mongoose.model('Class',classSchema);

module.exports = Class;