const express = require('express');
const app = express();
const PORT = 3000;

// Create routers
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Runserver
app.listen(PORT, () => {
  console.log(`Hii Hope developer!, i'm running on http://localhost:${PORT}`);
});
