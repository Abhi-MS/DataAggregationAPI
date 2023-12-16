# School System Data Aggregation API - Project Report

## Overview

This project is a Node.js API that aggregates data from a MongoDB database related to a school system. It provides an endpoint for obtaining summaries such as the total number of students, average student age, and the total number of classes offered.

## Architecture

### Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose

### Project Structure

|-- app.js
|-- models/
| |-- student.js
| |-- class.js
|-- routes/
| |-- api.js
|-- .gitignore
|-- package.json
|-- README.md
|-- report.md

This project contains the following files in the main branch :
-index.js
-README.md
-package-lock.json
-package.json

and the following directory
-models

models folder contains the folowing files which defines the schema for each model

-classModel.js
-studentModel.js
-teacherModel.js


## Challenges Faced

1. **Database Connection:**
   - Connecting the app to an existing database
   - Establishing relations between collections

## Future Improvements

1. **Authentication and Authorization:**
   - Add user authentication and authorization for secure API access.

2. **Error Handling:**
   - Implement more robust error handling to provide better feedback to users.

3. **Enhanced Data Summaries:**
   - Include additional data summaries based on user feedback.

## Conclusion

This project made me understand MongoDB and its newest updates more deeply. 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.




