# School System Data Aggregation API

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Postman documentation](#postman-documentation)

## Introduction

This Node.js API provides endpoints for aggregating data from a MongoDB database related to a school system. It offers summaries like the total number of students, average student age, and the number of classes offered.

## Features

- **Total Students:** Get the total number of students in the school system.
- **Average Age:** Retrieve the average age of all students.
- **Total Classes:** Obtain the total number of classes offered.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   git clone https://github.com/Abhi-MS/DataAggregationAPI.git
   
2. Install dependencies:
   cd DataAggregationAPI
   npm install

### Configuration
Set up your MongoDB connection string in the index.js file:

mongoose.connect('YOUR_MONGODB_CONNECTION_STRING', { useNewUrlParser: true, useUnifiedTopology: true });

### Usage
nodemon index.js

The API will be available at http://localhost:3000.

### Endpoints
Summary endpoint :
/summary: Get summaries like the total number of students, average age, and total classes.

## Postman Documentation

Explore the API endpoints using [Postman](https://documenter.getpostman.com/view/28467216/2s9Ykn82Lx).
