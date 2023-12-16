const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;




// Aggregation endpoint
app.get('/', async (req, res) => {
  try {
    // Total number of students
    const totalStudents = 23;

    // Average age of students
    const averageAge = 13;

    // Number of classes offered
    const totalClasses = 12;

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


