const express = require('express');
const path = require('path');

const app = express();
const PORT = 80; // or 443 if you're handling HTTPS via reverse proxy like nginx

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Fallback to index.html for SPA (optional)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
