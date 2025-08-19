// src/server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS, images) from /public
app.use(express.static(path.join(__dirname, '../public')));

// Set view engine to EJS
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// Define a sample route for the home page
app.get('/', (req, res) => {
  res.render('pages/home', { title: 'Welcome to MetaMind Site' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
