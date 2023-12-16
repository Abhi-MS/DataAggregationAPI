const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/studentModel');
const Teacher = require('./models/teacherModel');
const Class = require('./models/classModel');

const app = express();
const port = 3000;

// Aggregation endpoint
app.get('/summary', async (req, res) => {
  try {
    // Total number of students
    const totalStudents = await Student.countDocuments();

    // Average age of students
    const averageAgeResult = await Student.aggregate([{ $group: { _id: null, averageAge: { $avg: '$age' } } }]);
    const averageAge = averageAgeResult[0].averageAge.toFixed(2);

    // Number of classes offered
    const totalClasses = await Class.countDocuments();

    // Return the aggregated data
    res.json({
      totalStudents,
      averageAge,
      totalClasses,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Connect to MongoDB and start the server

mongoose.connect('mongodb+srv://admin:admin4567@dataaggregationapi.c5r4pt5.mongodb.net/DataAggregationSystem?retryWrites=true&w=majority')
  .then(() =>{
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    console.log('Connected to MongoDB')
  }).catch(()=>{
    console.log('error')
  })


