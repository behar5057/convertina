const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// API endpoint for conversion (mock)
app.post('/api/convert', (req, res) => {
  // Simulate conversion process
  setTimeout(() => {
    res.json({
      success: true,
      message: 'File converted successfully!',
      downloadUrl: '/api/download/sample-file'
    });
  }, 2000);
});

// Download endpoint
app.get('/api/download/sample-file', (req, res) => {
  res.download(path.join(__dirname, 'public', 'sample-converted.txt'));
});

// Serve the main page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Convertina server running on port ${PORT}`);
});
