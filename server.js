const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 8080;

console.log("Serving static files from:", __dirname);

app.use(express.static(__dirname));

// Debug route to check if file exists
app.get('/test-file', (req, res) => {
  const filePath = path.join(__dirname, 'privacy-policy.html');
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('privacy-policy.html NOT found');
    }
    res.send('privacy-policy.html exists and accessible');
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
