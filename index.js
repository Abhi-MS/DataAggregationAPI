const express = require('express');

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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
