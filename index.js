const express = require('express');
const bodyParser = require('body-parser');
const mysql2 = require('mysql2');
const app = express();
const port = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('Public'));


const db = mysql2.createConnection({
  host: "localhost",
  port: 3306, // Use your MySQL server port
  user: "root",
  password: "Gangesh@7352", // Replace with your MySQL password
  database: "user_data", // Replace with your database name
});

// Connect to the database and handle any connection errors
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the  database');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});