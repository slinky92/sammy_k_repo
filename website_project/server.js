const express = require("express");
const path = require("path");
const app = express();
const PORT = 6969;

// Automatically use the current folder for static files
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Website running at http://localhost:${PORT}`);
});


// run with "node server.js"