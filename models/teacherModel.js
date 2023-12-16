const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema(
    {
        name: String,
        subject:String,
    }
)

const Teacher = mongoose.model('Teacher',teacherSchema);

module.exports = Teacher;