// Import required modules
const express = require('express');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 or environment-defined port

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Set the path for static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('Home'); // Render Home.ejs
});
app.get('/Home', (req, res) => {
    res.render('Home'); // Render Home.ejs
});

app.get('/Login', (req, res) => {
    res.render('Login'); // Render Login.ejs
});

app.get('/Register', (req, res) => {
    res.render('Register'); // Render Register.ejs
});
app.get('/Main', (req, res) => {
    res.render('Main'); // Render Login.ejs
});

app.get('/Gift', (req, res) => {
    res.render('Gift'); // Render Gift.ejs
});

app.get('/Collarj', (req, res) => {
    res.render('Collarj'); // Render Collarj.ejs
});
app.get('/Design', (req, res) => {
    res.render('Design'); // Render Design.ejs
});
// Handle 404 - Page Not Found
app.use((req, res) => {
    res.status(404).render('404'); // Render 404.ejs for not found
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
