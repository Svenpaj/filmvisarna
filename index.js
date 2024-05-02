import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Port to run on
const port = 5000;

// Import express for creating a web server

// Import path to handle file paths

// Create a web server
const app = express();

app.use(express.json());

// Serve all the files in the dist folder
app.use(express.static('./dist'));

// I need to make sure that index.html is served for all routes

// Always serve index.html if nothing else found
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Start the web server on a port
app.listen(port, () => console.log('Listening on port ' + port));

